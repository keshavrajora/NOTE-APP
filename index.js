const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")
addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)
const saveNote = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data);
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}


//<div class="note">
//<div class="tool">
//  <i class="fa-solid fa-trash"></i>
// <i class="fa-regular fa-bookmark"></i>
// </div>
// <textarea></textarea>
// </div>

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class=" trash fa-solid fa-trash"></i>
    <i class="bookmark fa-regular fa-bookmark"></i>
</div>
<textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove()
            saveNote()
        }
    )
    note.querySelector(".bookmark").addEventListener(
        "click",
        function () {
            saveNote()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNote()
        }
    )
    main.appendChild(note);
    saveNote()
}


(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if (lsnotes === null) {
            addNote()
        } else {
            lsnotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()