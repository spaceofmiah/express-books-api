import mongoose, { ConnectOptions } from "mongoose";
import process from "process";
import dotenv from "dotenv"

dotenv.config()

const MONGO_DB_URL:string = process.env.MONGO_DB_URL ? process.env.MONGO_DB_URL : ''
export const setupDB = async () => {
    return await mongoose.connect(MONGO_DB_URL)
}
