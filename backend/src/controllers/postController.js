import { getPostModel, createPostModel } from "../models/postModel.js";

export const getAllPost = async (req, res) => {
    try {
        const posts = await getPostModel()
        res.json( posts )
    } catch (error) {
        res.json({ error: 'Error al procesar la solicitud'})
    }
}
export const createPost = async (req, res) => {
    try {
        const {titulo, url, descripcion} = req.body
        const newPost = await createPostModel(titulo, url, descripcion)
        res.json( { post: newPost } )
    } catch (error) {
        res.json({error: 'Error al procesar la solicitud', error})
    }
}