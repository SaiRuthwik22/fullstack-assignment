import { app } from "./app.js";
import {connectDB} from "./db/index.js"

const portNum = 8000

connectDB().then(
    app.listen(portNum,(req,res)=>{
        console.log("Server Is ready at port ")
    })
).catch((err)=>{
    console.log(err)
})