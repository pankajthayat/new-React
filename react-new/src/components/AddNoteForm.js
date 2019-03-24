import React, { useState } from "react";


const AddNoteForm = ({dispatch}) => { 
const [note, setNote] = useState("");
const [body, setBody] = useState("")

const handleOnSubmit = (e, title, body) => {
    e.preventDefault()
    dispatch({
        type: "ADD_NOTE",
        payload: { title, body }
    })
    setNote("");
    setBody("")
}

    return (<div>
        <p>Add Note</p>
        <form onSubmit={(e) => { handleOnSubmit(e, note, body) }}>
            <input value={note} onChange={(e) => {
                setNote(e.target.value)
            }
            }></input>
            <textarea value={body} onChange={(e) => { setBody(e.target.value) }}>decription</textarea>
            <button>Add</button>
        </form>
    </div>)
}
export default AddNoteForm;