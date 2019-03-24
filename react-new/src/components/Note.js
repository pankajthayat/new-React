import React from "react";

const Note = ({note, removeNote}) => {
    return (<div>
        <h3>{note.title}</h3><h5></h5>
        <p>{note.body}</p>
        <button onClick={() => { removeNote(note) }}>X</button>
    </div>
    )
}

export {Note as default};