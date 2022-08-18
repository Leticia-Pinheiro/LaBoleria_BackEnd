import connection from "../databases/postgres.js";

export async function SearchCake(name){
    return await connection.query(
		`
        SELECT * FROM cakes
        WHERE name = $1
    `,
		[name]
	);
}

export async function CreateCake(name, price, description, image){
    await connection.query(
        `INSERT INTO cakes (name, price, description, image) 
        VALUES ($1, $2, $3, $4)`, [name, price, description, image]
    )
}