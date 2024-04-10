const DB_URL = "mongodb+srv://admin:b3ba-8v5M9y%40j5Q@cluster0.nnzrhjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const DB_NAME = "bvr"
const DB_COLLECTION = "plot"

import { MongoClient, ServerApiVersion } from 'mongodb'

var dbConnection = null

const client = new MongoClient(DB_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function getConnection() {
    if(dbConnection == null) {
        const connection = await client.connect()
        dbConnection = connection.db(DB_NAME)
    }

    return dbConnection
}

export async function getPlotData() {
    const db = await getConnection()
    const newResults = {}
    const result = await db.collection(DB_COLLECTION).find({}).toArray()
    for(let i = 0; i < result.length; i++) {
        delete result[i]._id
        newResults[`${result[i].id}`] = result[i]
        delete newResults[`${result[i].id}`].id
    }

    return newResults
}
