import {AnyError, Db, MongoClient} from "mongodb";

require('dotenv').config();

const mongodb = require('mongodb');

const connectionString = process.env.MONGO || 'mongodb://localhost:27017/';


const dbName = process.env.DB || 'IgDb';

let dbConnection: Db;

connectDB()

export async function connectDB() {
    await mongodb.MongoClient.connect(connectionString, function (err: AnyError, db: MongoClient) {
        if (err) throw err;
        console.log('DB Connected!');
        dbConnection = db.db('IgDb');
    })
}
 export function getDB(){
    return dbConnection;
 }
