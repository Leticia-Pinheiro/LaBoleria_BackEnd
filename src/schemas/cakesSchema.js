import joi from "joi"

const CakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().min(1).required(),
    description: joi.string(),
    image: joi.string()
            .pattern(
                /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
            )
            .required()
})

export default CakeSchema