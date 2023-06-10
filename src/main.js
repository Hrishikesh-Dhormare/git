import { readFile } from "node:fs/promises";

async function main() {
    try {
        let path = "D:\\CDAC files\\WPT LAB\\Day_8\\thread.js";
        let data = await readFile(path, {encoding:"utf-8"});
        console.log(data);
    } catch (e) {
        console.log("Exception Occured :: ", e.message);
    }
}

main();