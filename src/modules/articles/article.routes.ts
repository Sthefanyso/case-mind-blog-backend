import { Router } from 'express';
import articleController from './article.controller.js';
import upload from '../../config/multer.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

const router = Router();

router.get('/:id', articleController.getArticleById);
router.get('/', articleController.getArticles);
router.post(
    '/',
    upload.single('banner'),authMiddleware,
    articleController.createArticle
);
router.put('/:id', authMiddleware, articleController.updateArticle);
router.delete('/:id', authMiddleware, articleController.deleteArticle);

export default router;