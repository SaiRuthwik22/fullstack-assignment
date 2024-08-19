import ApiResponse from "../utils/ApiResponse.js"
import {Card}from "../models/card.model.js"
import {nanoid} from "nanoid"
const postACard = async(req,res)=>{
    try {
        const {title,description,link} = req.body
        if(!title || !description || !link){
            return res.json(new ApiResponse(400,"title,description,link are required","false"))
        }
        const x = await Card.insertMany({id:nanoid(),title:title,description:description})
        const cards = await Card.find()
        return res.json(new ApiResponse(200,cards))
    } catch (error) {
        console.log(error)
        return res.json(new ApiResponse(500,"Server Error","false"))
    }
}

const getCard = async(req,res)=>{
try {
        const cards = await Card.find()
        return res.json(new ApiResponse(200,cards))
} catch (error) {
    console.log(error)
    return res.json(new ApiResponse(500,"Server Error","false"))
}
}

const getSpecificCard = async(req,res)=>{
try {
        const {title} = req.params
        console.log(title)
        const card = await Card.findOne({title:title})
        console.log(card)
        if(!card){
            return res.json(new ApiResponse(404,"Not found","false"))
        }
        return res.json(new ApiResponse(200,card))
} catch (error) {
    console.log(error)
    return res.json(new ApiResponse(500,"Server Error","false"))
}
}

export {postACard,getCard,getSpecificCard}