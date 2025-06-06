import pg from 'pg'
import 'dotenv/config'  // Aca referenciamos a las variables de entorno .env

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST} = process.env

const pool = new pg.Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE,
    allowExitOnIdle: true
})

pool.query('SELECT NOW()', (err,res)=> {
    if(err){
        console.log("Error conecting to DB", err)
    }else {
        console.log("DB Connected", res.rows[0])
    }
})

export default pool