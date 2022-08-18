import connection from "../databases/postgres.js";

export async function CreateClient(name, address, phone){
    await connection.query(
        `INSERT INTO clients (name, address, phone) 
        VALUES ($1, $2, $3)`, [name, address, phone]
    )
}