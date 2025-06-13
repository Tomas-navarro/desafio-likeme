import { text } from 'express'
import pool from '../../db/config.js'

export const getPostModel = async () => {
    const sqlQuery = 'SELECT * FROM POSTS'
    const response = await pool.query(sqlQuery)
    return response.rows
}

export const createPostModel = async (titulo, img, descripcion) => {
    const sqlQuery = {
        text: 'INSERT INTO POSTS (titulo, img, descripcion, likes) values ($1, $2, $3, $4) RETURNING *',
        values: [titulo, img , descripcion, 0]
    }
    const result = await pool.query(sqlQuery)
    console.log('Post agregado', result)
    return result.rows
}

export const putLikeModel = async (id) => {
    const sqlQuery ={
        text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING likes',
        values:[id]
    }
    const result = await pool.query(sqlQuery)
    if (result.rows.length === 0){
        throw new Error('Post no encontrado')
    }
    const newLikes = result.rows[0].likes;

    return newLikes
}

export const deletePostModel = async (id) => {
    const sqlQuery = {
        text:'DELETE FROM POSTS posts WHERE id=$1',
        values:[id]
    }
    const result = await pool.query(sqlQuery)
    return result.rows
}