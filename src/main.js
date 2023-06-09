import { readFile } from "node:fs/promises";

async function main() {
    try {
        let path = "thread.js";
        let data = await readFile(path, {encoding:"utf-8"});
        console.log(data);
    } catch (e) {
        console.log("Exception Occured :: ", e.message);
    }
}

main();