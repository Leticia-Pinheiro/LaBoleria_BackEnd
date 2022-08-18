import {GetPrice, CreateOrder, SearchClient, SearchCake} from "../repositories/ordersRepository.js"

export async function PostOrder(req, res){
    const data = req.body

    try{
        const { rows: client } = await SearchClient(data.clientId)
        if(client.length === 0){
            return res.status(409).send("Cliente não encontrado!")
        }

        const { rows: cake } = await SearchCake(data.cakeId)
        if(cake.length === 0){
            return res.status(409).send("Bolo não encontrado!")
        }

        const { rows: price } = await GetPrice(data.cakeId)        
        const pr = price[0].price
        const quant = data.quantity
        const totalPrice = pr * quant

        await CreateOrder(data.clientId, data.cakeId, data.quantity, totalPrice)

        res.sendStatus(201)

    }catch(error){
        res.status(500).send(error)
    }

}

export async function GetOrder(req, res){

    try{

    }catch(error){
        res.status(500).send(error)
    }

}

export async function GetOrderById(req, res){

    try{

    }catch(error){
        res.status(500).send(error)
    }

}