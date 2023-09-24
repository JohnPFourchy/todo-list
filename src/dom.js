// this file will manipulate the dom

function addNote(note) {
    const lst = document.getElementById("lst");
    lst.appendChild(note);
}

function hideNote(note) {
    const t = note.querySelector(".notes");
    t.classList.add("hidden");
}

function selectNote(note) {

    // Future Reference: QuerySelectorAll ONLY get descendants of the node!
    const notes = document.getElementsByClassName("list-item");
    const t = note.querySelector(".notes");

    note.addEventListener("click", () => {
        for(let i = 0; i < notes.length; i++) {
            const n = notes[i].querySelector(".notes");
            n.classList.add("hidden");
            notes[i].classList.remove("add-border");
        }

        t.classList.remove("hidden");
        note.classList.add("add-border");
    });
}

export {addNote, selectNote, hideNote};