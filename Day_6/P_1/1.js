function addnote(){
    let inp= document.querySelector("#input");
    let note_val=inp.value;

    let note=document.querySelector("#type");
    let ref = note.innerHTML;

    let newnote=`<h2 class="alert alert-warning">${note_val}
                <span style="font-weight:bolder; font-size: xx-large;">&#9786</span></h2>`;
    let newvalue= newnote + ref ;
    note.innerHTML = newvalue;
    inp.value="";
}


