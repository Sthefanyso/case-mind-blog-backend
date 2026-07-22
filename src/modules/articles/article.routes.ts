import { Router } from 'express';
import articleController from './article.controller.js';
import upload from '../../config/multer.js';

const router = Router();

router.get('/:id', articleController.getArticleById);
router.get('/', articleController.getArticles);
router.post(
    '/',
    upload.single('banner'),
    articleController.createArticle
);router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

export default router;