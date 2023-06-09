function addtweet() {
    let ref = document.querySelector("#id1");
    let val= ref.value;

    let ref2 = document.querySelector("#id2");
    let val2 = ref2.innerHTML;

    // let newtweet=`<h2 id="id2" class="alert alert-info" style="background-color: silver;">${val}</h2>`;
    let newtweet = `<div style="border-style: solid; border-width: thin; border-color: grey;margin-right: 40px; border-radius: 15px; background: white;">
    <div
      style="
        display: flex;
        height: 5vh;
        width: 50vw;
        padding-left: 16px;
        padding-right: 16px;
      "
    >
      <div
        style="
          height: 40px;
          width: 43px;
          margin-top: 8px;
          border-radius: 45px;
          background-color: grey;
          padding-left: 40px;
        "
      ></div>
      <div style="display: flex; flex-direction: column">
        <div style="font-weight: bold; padding-left: 16px; text-align: left; margin-top: 8px;">
          Account
        </div>
        <div style="padding-left: 16px; color: grey; text-align: left">
          @username
        </div>
      </div>
      <div>
        <div
        style="
          width: 50px;
          font-size: 30px;
          color: royalblue;
          justify-content: right;
          padding-left: 1220px; 
          margin-top: 8px;
        "
      >
        <i class="fa fa-twitter"></i>
      </div>
      </div>
      
    </div>

    <div
      style="
        height: auto;
        padding-left: 16px;
        padding-right: 18px;
        margin-top: 25px;
        margin-right: 25px;
      "
    >
      <div style="font-size: large; font-family: cursive;">
        ${val}
      </div>
      <div style="font-weight: bold; color: royalblue">#Twitter</div>
      <div style="
            font-size: smaller; 
            margin-top: 6px; 
            color: grey
            "
        >
        8:30 PM Jun 1 2023
      </div>
    </div>
    <div
      style="
        display: flex;
        justify-content: space-around;
        margin-top: 8px;
        margin-left: 16px;
        margin-right: 8px;
        margin-bottom: 8px;
        /* color: royalblue; */
        color: royalblue;
        font-size: large;
      "
    >
      <div><i class="fa fa-comment"></i></div>
      <div><i class="fa fa-retweet"></i></div>
      <div><i class="fa fa-heart"></i></div>
      <div><i class="fa fa-share"></i></div>
    </div>
</div>
`;
    let newval = newtweet + val;
    ref2.innerHTML=newval;
    ref.value="";
}