import {createNote} from "./components.js";
import {addNote, selectNote, hideNote, addLocalStorageNotes} from "./dom.js";

// main application logic
const addBtn = document.querySelector(".add-note");
addBtn.addEventListener("click", () => {
    const note = createNote("apple");
    hideNote(note);
    addNote(note);
    selectNote(note);
});
