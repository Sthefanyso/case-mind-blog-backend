import { Request, Response } from 'express';
import articleService from './article.service.js';

const getArticles = async (
    req: Request,
    res: Response
) => {
    const articles = await articleService.getArticles();

    res.json(articles);
};

export default {
    getArticles
};