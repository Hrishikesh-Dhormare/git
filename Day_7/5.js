function register({
    id,
    email,
    mobile,
})
{
    console.log(id);
    console.log(email);
    console.log(mobile);
}

let id = 100;
let email = "abcdef@gmail.com";
let mobile = "9423875761";

register({ mobile, id, email});