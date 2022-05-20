import {Collection, Db} from "mongodb";
import {Influencer} from "../models/influencer.modal";
import {getDB} from "../db/conn"

let dbConnect: Db;
let collection: Collection<Influencer>;
const collectionName = 'influencers';


async function createCollection() {
    await dbConnect.createCollection(collectionName, function (err: any, res: any) {
        if (err) throw err;
        console.log("Collection created!");
    });
}

async function connectCollection() {
    dbConnect = getDB();

    if (dbConnect){
        const col = await dbConnect.collection(collectionName);
        if (!col) {
            await createCollection()
        }

        collection = dbConnect.collection(collectionName);
    }
}

export async function saveInfluncers(influencers: Influencer[]) {
    await connectCollection();
    if (collection){
        await collection.insertMany(influencers, (err: any, result: any) => {
            if (err) console.log(err);
            if (result) {
                console.log('Import CSV into database successfully.');
            }
        });
    }

}

export async function getInfluncersFromStorage( filter = {}, sort = {}) {
    await connectCollection();
    if (!collection)return []
    console.log(filter);
    return await collection.find(filter).sort(sort).toArray();
}
