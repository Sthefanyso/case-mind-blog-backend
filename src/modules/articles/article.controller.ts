import type { Request, Response } from 'express';
import articleService from './article.service.js';

const getArticles = async (
    _req: Request,
    res: Response
): Promise<void> => {
    const articles = await articleService.getArticles();

    res.json(articles);
};

const getArticleById = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);

    const article = await articleService.getArticleById(id);

    if (!article) {
        res.status(404).json({
            message: 'Article not found'
        });
        return;
    }

    res.json(article);
};

const createArticle = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { title, content, author_id } = req.body;

    const article = await articleService.createArticle(
        title,
        content,
        author_id
    );

    res.status(201).json(article);
};

const updateArticle = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);

    const { title, content } = req.body;

    const article = await articleService.updateArticle(
        id,
        title,
        content
    );

    if (!article) {
        res.status(404).json({
            message: 'Article not found'
        });

        return;
    }

    res.json(article);
};

const deleteArticle = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);

    const deleted = await articleService.deleteArticle(id);

    if (!deleted) {
        res.status(404).json({
            message: 'Article not found'
        });

        return;
    }

    res.json({
        message: 'Article deleted successfully'
    });
};

export default {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};