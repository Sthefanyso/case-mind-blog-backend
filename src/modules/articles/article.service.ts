import articleModel from './article.model.js';
import type { Article } from './article.types.js';

const getArticles = async (): Promise<Article[]> => {
    return await articleModel.findAll();
};

const getArticleById = async (
    id: number
): Promise<Article | null> => {
    return await articleModel.findById(id);
};

const createArticle = async (
    title: string,
    content: string,
    author_id: number
): Promise<Article> => {
    return await articleModel.create(
        title,
        content,
        author_id
    );
};

const updateArticle = async (
    id: number,
    title: string,
    content: string
): Promise<Article | null> => {
    return await articleModel.update(
        id,
        title,
        content
    );
};

const deleteArticle = async (
    id: number
): Promise<boolean> => {
    return await articleModel.remove(id);
};

export default {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};