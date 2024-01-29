console.log('CPEnotebook');

const libraryForm = document.querySelector('.library-form');

function notebookValidation(event){
    const checkedNotebookSet = document.querySelectorAll('input[name="notebook_set"]:checked');
    if(checkedNotebookSet.length === 0){
        event.preventDefault();
        alert("กรุณาเลือกอย่างน้อย 1 วิชา");
    }
}

if(!!libraryForm){
    libraryForm.addEventListener('submit', notebookValidation);
}