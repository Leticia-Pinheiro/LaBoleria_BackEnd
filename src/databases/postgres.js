import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg 

const connection = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default connection





// const configDatabase = {
// 	connectionString: process.env.DATABASE_URL,
// }

// if (process.env.MODE === "PROD") {
// 	configDatabase.ssl = {
// 		rejectUnauthorized: false,
// 	}
// }

// const connection = new Pool(configDatabase)
// export default connection