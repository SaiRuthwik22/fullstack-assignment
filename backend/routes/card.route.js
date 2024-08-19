import {Router} from "express"

import { postACard,getCard, getSpecificCard } from "../controllers/card.controller.js"

const router = Router()


router.route("/submit").post(postACard)
router.route("/getcards").get(getCard)
router.route("/:title").get(getSpecificCard)

export default router