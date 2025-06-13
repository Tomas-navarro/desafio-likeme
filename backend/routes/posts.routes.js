import { Router } from "express";
import { createPost, deletePost, getAllPost, updateLikePost } from "../src/controllers/postController.js";

const router = Router()

router.get('/posts', getAllPost)
router.post('/posts', createPost)
router.put('/posts/like/:id',updateLikePost)
router.delete('/posts/:id',deletePost)
export default router