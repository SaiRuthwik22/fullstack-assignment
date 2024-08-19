import mongoose from "mongoose"

async function connectDB(req,res){
    try{
        const result = await mongoose.connect('mongodb+srv://yourusername:yourpassword@cluster0.sbcd5.mongodb.net/demo');
    }
    catch{
        console.log("error while conecting to mongodb database")
        process.exit(1)
    }
}

export {connectDB} 
