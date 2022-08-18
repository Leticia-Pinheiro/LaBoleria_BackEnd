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