import mongoose,{Schema} from "mongoose"

const cardSchema = new Schema({
    id:{
        type: String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

export const Card = mongoose.model("Card",cardSchema)