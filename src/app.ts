import express from 'express';
import articleRoutes from './modules/articles/article.routes.js';

const app = express();

app.use(express.json());

app.use('/articles', articleRoutes);

export default app;