import {CreateClient, GetOrdersClient} from "../repositories/clientsRepository.js"

export async function PostClient(req, res){
    const data = req.body
    
    try{       

        await CreateClient(data.name, data.address, data.phone)

        res.sendStatus(201)

    }catch(error){
        res.status(500).send(error)
    }

}

export async function GetOrdersByClient(req, res){    
    const{id} = req.params  

    try{
        const { rows: orders } = await GetOrdersClient(id)
        if(orders.length === 0){
            return res.status(404).send([])
        }

        res.status(200).send(orders)

    }catch(error){
        res.status(500).send(error)
    }

}