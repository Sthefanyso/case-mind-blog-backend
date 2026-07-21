import articleModel from './article.model.js';

const getArticles = async () => {
    return await articleModel.findAll();
};

export default {
    getArticles
};