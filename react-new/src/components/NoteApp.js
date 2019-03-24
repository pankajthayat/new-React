
import React,{useEffect,useReducer,useState} from "react";
import notesReducer from "../reducers/noteReducer";
import Note from "./Note";
import NoteList from "./NoteList"
import AddNoteForm from "./AddNoteForm";
const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);// use reducer return a state and and dispatch fn
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
    const removeNote = (note) => {
        dispatch({ type: "REMOVE_NOTE", payload: note })
    }

    return (
        <div>
            <p>Notes</p>
           <NoteList notes={notes} removeNote={removeNote}/>
            <AddNoteForm dispatch={dispatch}/>
        </div>
    )
}

export {NoteApp as default}