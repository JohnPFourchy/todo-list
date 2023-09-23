import {createNote} from "./components.js";
import {addNote, selectNote} from "./dom.js";

// main application logic
const addBtn = document.querySelector(".add-note");
addBtn.addEventListener("click", () => {
    const note = createNote("apple");
    selectNote(note);
    addNote(note);
});
