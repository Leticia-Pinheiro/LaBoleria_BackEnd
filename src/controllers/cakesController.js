import CakeSchema from "../schemas/cakesSchema"

export async function PostCake(req, res){
    const cakeData = req.body

    try{

    }catch(error){
        req.sendStatus(500)
    }

}