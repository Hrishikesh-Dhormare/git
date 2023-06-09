let list = ["mumbai","calcutta","delhi"];
let no = [1, 2, 3];

for(let i=0; i<list.length; ++i){
    let item = list[i];
    console.log(item);
}

console.log("##########");
for(let item of list){
    console.log(item);
}