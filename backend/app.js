import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin:"*",
    credentials:true
}))

app.use(express.json())

import cardRoutes from "./routes/card.route.js"

app.use("/api/card",cardRoutes)

export {app}