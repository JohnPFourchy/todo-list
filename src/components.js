// this file will create components - new note form and notes

function createNote() {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const input = document.createElement("input");
    input.classList.add("note-title");
    input.placeholder = "enter title";

    const textarea = document.createElement("textarea");
    textarea.classList.add("notes");
    textarea.placeholder = "Write whatever you want here ...";

    li.appendChild(input);
    li.appendChild(textarea);

    return li;
}

export {createNote};