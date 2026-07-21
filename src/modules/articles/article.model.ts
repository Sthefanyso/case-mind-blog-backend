import db from '../../config/database.js';
import type { Article } from './article.types.js';

const findAll = async (): Promise<Article[]> => {
    const [rows] = await db.query(
        'SELECT * FROM articles'
    );

    return rows as Article[];
};

export default {
    findAll
};