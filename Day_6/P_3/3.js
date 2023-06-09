function inc() {
    let ref = document.querySelector("#id1");
    let val=ref.innerHTML;
    let newval= parseInt(val) + 1;
    ref.innerHTML=newval;
}

function inc1() {
    let ref = document.querySelector("#id2");
    let val=ref.innerHTML;
    let newval= parseInt(val) + 1;
    ref.innerHTML=newval;
}