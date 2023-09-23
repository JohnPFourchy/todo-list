// this file will manipulate the dom

function addNote(note) {
    const lst = document.getElementById("lst");
    lst.appendChild(note);
}

function selectNote(note) {

    note.addEventListener("click", () => {
        const t = note.querySelector(".notes");
        t.classList.remove("hidden");
        note.classList.add("add-border");
    });

    // note.addEventListener("blur", () => {
    //     console.log("here");
    //     note.classList.remove("add-border");
    // })
}

export {addNote, selectNote};