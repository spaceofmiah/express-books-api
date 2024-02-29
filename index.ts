import {setupDB} from "./settings/database"
import Express from "express";
import process, { exit } from "process";
import dotenv from "dotenv"
import { Book } from "./models/Book";

dotenv.config()
const express = Express()


express.listen(process.env.PORT, async () => {
    await setupDB()
    .then(() => console.log("Database connected"))
    .catch(err => {
        console.log(err)
        exit(1)
    })
    
    console.log(
        `Server is running on port ${process.env.PORT}`
    )
})