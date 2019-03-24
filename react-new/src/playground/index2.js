import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
    switch (action.type) {
        case "POPULATE_NOTES":
            return action.notes;
        case "ADD_NOTE":
            console.log("add staet : ", state, action.payload);
            return [...state, action.payload];
        case "REMOVE_NOTE":
            return state.filter((note) => note.title !== action.payload.title);
        default:
            return state;
    }
}


const Notes = () => {

    const [notes, dispatch] = useReducer(notesReducer, []);// use reducer return a state and and dispatch fn
    const [note, setNote] = useState("");
    const [body, setBody] = useState("")
// useState uses useReducer behind the scene


    useEffect(() => {
        console.log("this will run only once");
        let notesArray = JSON.parse(localStorage.getItem("notes"));
        console.log("notes Array : ", notesArray);
        if (notesArray) {
            dispatch({ type: "POPULATE_NOTES", notes: notesArray })
        }


    }, [])// it has no dependencies so it will run only once


    useEffect(() => {
        console.log("notes : ", notes);
        localStorage.setItem("notes", JSON.stringify(notes));

    }, [notes])


    const handleOnSubmit = (e, title, body) => {
        e.preventDefault()
        dispatch({
            type: "ADD_NOTE",
            payload: { title, body }
        })
        setNote("");
        setBody("")
    }

    const removeNote = (note) => {
        //   setNotes(notes.filter((data)=>data.title!==note.title))
        dispatch({ type: "REMOVE_NOTE", payload: note })
    }

    return (
        <div>
            <p>Notes</p>
            {notes.map((note, i) => {
                return (<Note key={i} note={note} removeNote={removeNote} />)
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

const Note = ({note, removeNote}) => {
    useEffect(() => {
        console.log("note use effact")
        // returning a function achieve componentDidUnmout funcatinalitiy.. it iwll run when the compo unmout...ie. here where we remove all the notes.. <Note/>< will unmout
        return () => {
            console.log("cleaning up");
        }
    }, [])
    return (<div>
        <h3>{note.title}</h3><h5></h5>
        <p>{note.body}</p>
        <button onClick={() => { removeNote(note) }}>X</button>
    </div>
    )
}




ReactDOM.render(<Notes></Notes>, document.getElementById('root'));
serviceWorker.unregister();


