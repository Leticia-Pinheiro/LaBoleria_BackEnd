import {SearchCake, CreateCake} from "../repositories/cakesRespository.js"

export async function PostCake(req, res){
    const data = req.body
    
    try{
        const { rows: cake } = await SearchCake(data.name)
        
        if(cake.length){
            return res.status(409).send("Bolo já cadastrado!");
        }

        await CreateCake(data.name, data.price, data.description, data.image)

        res.sendStatus(201)

    }catch(error){
        res.status(500).send(error)
    }

}