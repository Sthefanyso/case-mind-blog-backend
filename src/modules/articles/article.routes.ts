import { Router } from 'express';
import articleController from './article.controller.js';

const router = Router();

router.get('/', articleController.getArticles);

export default router;