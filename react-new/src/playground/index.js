import React, { useState, useEffect,useReducer } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
const notesReducer=(state,action)=>{
    switch(action.type){
        case "PUPULATE_NOTES":
            return action.notes;
        default:
            return state;
    }
}


const Notes = () => {

    const [notes,dispatch]=useReducer(notesReducer,[]);// use reducer return a state and and dispatch fn
    const [note, setNote] = useState("");
    const [body, setBody] = useState("")
    //const [notes, setNotes] = useState([]);

    useEffect(() => {
        console.log("this will run only once");
        let notesArray = JSON.parse(localStorage.getItem("notes"));
        //console.log("notes Array : ", notesArray, " loc : ", localStorage.getItem("notes"), "typeof : ", typeof (notesArray));
        if (notesArray) {
           // setNotes(notesArray || []);
           dispatch({type:"POPULATE_NOTES",notes:notesArray})
        }


    }, [])// it has no dependencies so it will run only once


    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));

    }, [notes])
    // useEffect(()=>{
    //     console.log("use effact running")

    //      localStorage.setItem("notes",JSON.stringify(notes));

    // })

    const handleOnSubmit = (e, title, body) => {
        e.preventDefault()
        // setNotes([
        //     ...notes,
        //     { title, body }
        // ])
        setNote("");
        setBody("")
    }

    const removeNote=(note)=>{
     //   setNotes(notes.filter((data)=>data.title!==note.title))
    }

    return (
        <div>
            <p>Notes</p>
            {notes.map((note, i)=>{
                return(<Note key ={i} note={note} removeNote={removeNote}/>)
            })}
            
            <p>Add Note</p>
            <form onSubmit={(e) => { handleOnSubmit(e, note, body) }}>
                <input value={note} onChange={(e) => {
                    setNote(e.target.value)
                }
                }></input>
                <textarea value={body} onChange={(e) => { setBody(e.target.value) }}>decription</textarea>
                <button>Add</button>
            </form>
        </div>
    )
}

const Note=({note, removeNote})=>{
    useEffect(()=>{
        console.log("note use effact")
// returning a function achieve componentDidUnmout funcatinalitiy.. it iwll run when the compo unmout...ie. here where we remove all the notes.. <Note/>< will unmout
        return ()=>{
            console.log("cleaning up");
        }
    },[])
    return(<div>
                        <h3>{note.title}</h3><h5></h5>
                        <p>{note.body}</p>
                        <button onClick={()=>{removeNote(note)}}>X</button>
                    </div>
                    )
}




ReactDOM.render(<Notes></Notes>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
















const App = (props) => {

    const [state, setState] = useState({
        count: props.count,
        text: props.text
    })

    const increment = () => {
        setState({ count: state.count + 1 })// if we do this way it will change the state...and we will losse text
        // a work around to this is ...state,count:state.count... distructure the state and update the property
        // but this is not recommanded .... use useState for multiple useState for multiple property like the previous example(this is recommanded to use)
        //use state has diff behaviour than state
    }

    return (<div>
        <p>the {state.text || "count"} is {state.count}</p>
        <button onClick={() => { setState({ count: state.count - 1 }) }}>-1</button>
        <button onClick={increment}>+1</button>
        <button onClick={() => { setState({ count: props.count }) }}>reset</button>
        <input value={state.text} onChange={(e) => { setState({ text: e.target.value }) }} />
    </div>)
}

App.defaultProps = {
    count: 0
}


/*const App=(props)=>{
    
    const [count,setCount]=useState(props.count)

    const increment=()=>{
        setCount(count+1)
    }
    
    return(<div>
    <p>the count is {count}</p>
    <button onClick={()=>{setCount(count-1)}}>-1</button>
    <button onClick={increment}>+1</button>
    <button onClick = {()=>{setCount(props.count)}}>reset</button>
    </div>)
}*/

