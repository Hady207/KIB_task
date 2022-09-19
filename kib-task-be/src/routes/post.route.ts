// router example
import { Router } from 'express';
import { PostController } from '../controllers/post.controller';

const PostControllerRoute = new PostController();

const router = Router();

router
  .route('/')
  .get(PostControllerRoute.getPosts)
  .post(PostControllerRoute.createPost)
  .delete(PostControllerRoute.deleteAllPosts);

router
  .route('/:id')
  .get(PostControllerRoute.getPost)
  .patch(PostControllerRoute.updatePost)
  .delete(PostControllerRoute.deletePost);

export default router;
