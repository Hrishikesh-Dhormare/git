function msg(reply){
    let ref = document.querySelector("#id1");
    let input= document.querySelector("#id2");
    let ref2 = ref.innerHTML
    let ref1 =input.value;
    let msg_pos = reply ? "end" : "start" ;
    let msg_col = reply ?  "warning" : "success"
    let newadd=`<h1 class="d-flex justify-content-${msg_pos}">
                    <span class="badge bg-${msg_col}">${ref1}</span>
                </h1>`;
    
    let newref = ref2+ newadd;
    ref.innerHTML=newref;
    input.value="";
}

function addmsg(reply){
    let send = document.querySelector("#id1");
    let ref = document.querySelector("#id2");
    let input= ref.value;

    let ref1 = send.innerHTML;
    let msg_pos = reply ? "end" : "start" ; 
    let newmsg=`<h1 class="d-flex justify-content-${msg_pos}">
                    <span class="badge text-bg-success">${input}</span>
                </h1>`;
    let newref = ref1 + newmsg;
    ref.innerHTML=newref;
    input.value="";

}