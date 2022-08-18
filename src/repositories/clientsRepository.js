import connection from "../databases/postgres.js";

export async function CreateClient(name, address, phone){
    await connection.query(
        `INSERT INTO clients (name, address, phone) 
        VALUES ($1, $2, $3)`, [name, address, phone]
    )
}

export async function GetOrdersClient(id){
    return await connection.query(`
        SELECT o.id AS "orderId",
        o.quantity,
        o."createdAt",
        o."totalPrice",
        ca.name AS "cakeName" 
        FROM orders o
        JOIN clients cl
        ON cl.id = o."clientId"
        JOIN cakes ca
        ON ca.id = o."cakeId"
        WHERE cl.id = $1
        `, [id]
        )
}