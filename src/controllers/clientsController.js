import {CreateClient} from "../repositories/clientsRepository.js"

export async function PostClient(req, res){
    const data = req.body
    
    try{       

        await CreateClient(data.name, data.address, data.phone)

        res.sendStatus(201)

    }catch(error){
        res.status(500).send(error)
    }

}

export async function GetClientById(req, res){    

    try{

    }catch(error){
        res.status(500).send(error)
    }

}