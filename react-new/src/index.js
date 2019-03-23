import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const Notes=()=>{

            let notesArray = JSON.parse(localStorage.getItem("notes"));
        console.log("notes Array : ", notesArray, " loc : ", localStorage.getItem("notes"), "typeof : ", typeof(notesArray));
        // setNotes(notesArray);
    const [notes,setNotes]=useState(notesArray || []);
    const [note,setNote]=useState("");
    const [body,setBody]=useState("")

    useEffect(()=>{
        console.log("use effact running")
       
         localStorage.setItem("notes",JSON.stringify(notes));

    })

    const handleOnSubmit=(e,title,body)=>{
        e.preventDefault()
        setNotes([
            ...notes,
            {title,body}
        ])
        setNote("");
        setBody("")
    }

    return(
        <div>
        <p>Notes</p>
        {console.log("notes : ", notes)}
        {notes.map((note,i)=>{
            return(<p key ={i}>{note.title+"  :  "+note.body}</p>)
        })}
        <p>Add Note</p>
        <form onSubmit={(e)=>{handleOnSubmit(e,note,body)}}>
        <input value={note} onChange={(e)=>{
            setNote(e.target.value)
             }
             }></input>
        <textarea value={body} onChange={(e)=>{setBody(e.target.value)}}>decription</textarea>
        <button>Add</button>
        </form>
        </div>
    )
}




















const App=(props)=>{
    
    const [state,setState]=useState({
        count:props.count, 
        text: props.text
    })

    const increment=()=>{
        setState({count:state.count+1})// if we do this way it will change the state...and we will losse text
        // a work around to this is ...state,count:state.count... distructure the state and update the property
        // but this is not recommanded .... use useState for multiple useState for multiple property like the previous example(this is recommanded to use)
        //use state has diff behaviour than state
}
    
    return(<div>
    <p>the {state.text || "count"} is {state.count}</p>
    <button onClick={()=>{setState({count:state.count-1})}}>-1</button>
    <button onClick={increment}>+1</button>
    <button onClick = {()=>{setState({count:props.count})}}>reset</button>
    <input value={state.text} onChange={(e)=>{setState({text:e.target.value})}}/>
    </div>)
}

App.defaultProps={
    count:0
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


ReactDOM.render(<Notes></Notes>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
