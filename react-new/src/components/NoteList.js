import React from "react";
import Note from "./Note";

const NoteList = ({notes, removeNote}) => {
    return  notes.map((note, i) => {
                return (<Note key={i} note={note} removeNote={removeNote} />)
            });
}

export {NoteList as default}