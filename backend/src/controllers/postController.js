import { getPostModel, createPostModel, putLikeModel, deletePostModel } from "../models/postModel.js";

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

export const updateLikePost = async (req, res) => {
    try {
        const {id} = req.params
        const newLikes = await putLikeModel(id)
        res.status(200).json({message: 'Likes actualizados correctamente', newLikes})
    } catch (error) {
         res.status(500).json({error: 'Error al procesar la solicitud', error})
    }
}

export const deletePost = async (req, res) => {
    try {
        const {id} = req.params
        const posts = await deletePostModel(id)
        if(posts === 0){
            res.status(500).json({error: 'Posts no encontrado'})
        }
         res.status(200).json({message: 'Posts borrado correctamente', newLikes})
    } catch (error) {
        res.status(500).json({error: 'Error al procesar la solicitud', error})
    }
}