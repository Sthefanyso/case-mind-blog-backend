import db from '../../config/database.js';

const findAll = async () => {
    const [rows] = await db.query(
        'SELECT * FROM articles'
    );

    return rows;
};

export default {
    findAll
};