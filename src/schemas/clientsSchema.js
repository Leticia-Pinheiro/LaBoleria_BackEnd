import joi from "joi"

const ClientSchema = joi.object({
    name: joi.string().min(2).required(),
    address: joi.string().min(2).required(),
    phone: joi.string().min(10).max(11).pattern(/^[0-9]+$/).required()  
})

export default ClientSchema