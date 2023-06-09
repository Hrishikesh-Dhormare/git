import { readFile } from "node:fs/promises";

async function main() {
    let filePath = "\main.js";
    let fileData = await readFile(filePath, {encoding: "utf-8"});
    console.log(fileData);
}

main();