import { bookRouter } from "./routes/bookRouter";
import {setupDB} from "./settings/database"
import process, { exit } from "process";
import Express from "express";
import dotenv from "dotenv"

dotenv.config()
const app = Express()


// use bodyParser
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.listen(process.env.SERVER_PORT, async () => {
    await setupDB()
    .then(() => console.log("Database connected"))
    .catch(err => {
        console.log(err)
        exit(1)
    })
    
    console.log(
        `Server is running on port ${process.env.SERVER_PORT}`
    )
})


app.use(bookRouter)