import {AnyError, Collection, Db, MongoClient} from "mongodb";
import {Influencer} from "../models/influencer.modal";

let dbConn: Db;
let collection: Collection<Influencer>;


async function createCollection() {
    return ;
}

async function connectCollection() {
    return ;
}

export async function saveInfluncers(influencers: Influencer[]) {
    collection.insertMany(influencers, (err: any, result: any) => {
        if (err) console.log(err);
        if (result) {
            console.log('Import CSV into database successfully.');
        }
    });
}

export async function getInfluncersFromStorage( filter = {}) {
    return await collection.find(filter).toArray();
}
