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
    const { title, content } = req.body;
    const author_id = req.user?.id;
    const banner = req.file?.filename;

    if (!title || !content) {
        res.status(400).json({
            message: 'Title and content are required'
        });

        return;
    }

    if (!author_id) {
        res.status(401).json({
            message: 'User not authenticated'
        });

        return;
    }

    const article = await articleService.createArticle(
        title,
        content,
        author_id,
        banner
    );

    res.status(201).json(article);
};


const updateArticle = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);

    const { title, content } = req.body;

    const existingArticle = await articleService.getArticleById(id);


    if (!existingArticle) {
        res.status(404).json({
            message: 'Article not found'
        });

        return;
    }

    if (existingArticle.author_id !== req.user?.id) {
        res.status(403).json({
            message: 'You are not allowed to edit this article'
        });

        return;
    }

    const article = await articleService.updateArticle(
        id,
        title,
        content
    );

    res.json(article);
};
const deleteArticle = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);

    const existingArticle = await articleService.getArticleById(id);

    if (!existingArticle) {
        res.status(404).json({
            message: 'Article not found'
        });

        return;
    }

    if (existingArticle.author_id !== req.user?.id) {
        res.status(403).json({
            message: 'You are not allowed to delete this article'
        });

        return;
    }

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