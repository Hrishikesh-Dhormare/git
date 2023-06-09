import { MongoClient } from "mongodb";

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    const db = client.db("mydb");
    const messageColl = db.collection("message");
    await messageColl.insertOne({ message: "Hrishi"});

    await client.close();
    console.log("Record Added");
}

main();