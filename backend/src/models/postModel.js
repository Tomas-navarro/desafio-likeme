import pool from '../../db/config.js'

export const getPostModel = async () => {
    const sqlQuery = 'SELECT * FROM POSTS'
    const response = await pool.query(sqlQuery)
    return response.rows
}

export const createPostModel = async (titulo, img, descripcion) => {
    const sqlQuery = {
        text: 'INSERT INTO POSTS (titulo, img, descripcion) values ($1, $2, $3) RETURNING *',
        values: [titulo, img , descripcion]
    }
    const result = await pool.query(sqlQuery)
    console.log('Post agregado', result)
    return result.rows
}