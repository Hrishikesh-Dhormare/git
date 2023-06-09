console.log("Hello ");
console.log("Hrishi ");

setTimeout(() => console.log("Good Morning"),90);

console.log("9 June");

async function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 10));

async function main(){
    let result =  await sum(1, 1);
    console.log(result);
}
main();