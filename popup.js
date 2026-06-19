const notearea=document.getElementById("notes");
const saveBtn=document.getElementById("savebtn");

saveBtn.addEventListener("click",()=>{
    const note=notearea.value;
    chrome.storage.local.set({
        note:note
    })
    alert("Note saved");
})


chrome.storage.local.get(
    ["note"],(result)=>{
        if(result.note)
        {
            notearea.value=result.note;
        }
    }
);

