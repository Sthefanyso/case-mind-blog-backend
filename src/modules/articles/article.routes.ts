import express from 'express';
import articleController from './article.controller.js';

const router = express.Router();

router.get('/', articleController.getArticles);

export default router;