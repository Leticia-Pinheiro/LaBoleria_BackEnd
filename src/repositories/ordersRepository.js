import connection from "../databases/postgres.js";

export async function GetPrice(cakeId){
    return await connection.query(
        `SELECT price FROM cakes WHERE id = $1`, [cakeId]
    )
}

export async function CreateOrder(clientId, cakeId, quantity, totalPrice){
    await connection.query(
        `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") 
        VALUES ($1, $2, $3, $4)`, [clientId, cakeId, quantity, totalPrice]
    )
}

export async function SearchCake(cakeId){
    return await connection.query(
		`SELECT * FROM cakes WHERE id = $1`, [cakeId]
	);
}

export async function SearchClient(clientId){
    return await connection.query(
		`SELECT * FROM clients WHERE id = $1`, [clientId]
	);
}

export async function GetAllOrders(date){   
    const query = `SELECT o.id AS "orderId",
    o."createdAt",
    o.quantity,
    o."totalPrice",
    cl.id AS "clientId",
    cl.name AS "clientName",
    cl.address,
    cl.phone,
    ca.id AS "cakeId",
    ca.name AS "cakeName",
    ca.price,
    ca.image,
    ca.description
    FROM orders o
    JOIN clients cl
    ON cl.id = o."clientId"
    JOIN cakes ca
    ON ca.id = o."cakeId"      
    `   

    return await connection.query(query)
}

export async function GetOrderId(id){
    return await connection.query(
        `
        SELECT o.id AS "orderId",
        o."createdAt",
        o.quantity,
        o."totalPrice",
        cl.id AS "clientId",
        cl.name AS "clientName",
        cl.address,
        cl.phone,
        ca.id AS "cakeId",
        ca.name AS "cakeName",
        ca.price,
        ca.image,
        ca.description
        FROM orders o
        JOIN clients cl
        ON cl.id = o."clientId"
        JOIN cakes ca
        ON ca.id = o."cakeId"   
        WHERE o.id  = $1     
        `, [id]
    )
}