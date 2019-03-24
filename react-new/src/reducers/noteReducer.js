
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

export {notesReducer as default};