import articleModel from './article.model.js';
import type { Article } from './article.types.js';

const getArticles = async (): Promise<Article[]> => {
    return await articleModel.findAll();
};

export default {
    getArticles
};