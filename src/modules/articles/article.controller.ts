import type { Request, Response } from 'express';
import articleService from './article.service.js';

const getArticles = async (
    _req: Request,
    res: Response
): Promise<void> => {
    const articles = await articleService.getArticles();

    res.json(articles);
};


export default {
    getArticles
};