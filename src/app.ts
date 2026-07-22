import express from 'express';
import articleRoutes from './modules/articles/article.routes.js';
import userRoutes from './modules/users/user.routes.js';

const app = express();

app.use(express.json());

app.use('/articles', articleRoutes);
app.use('/users', userRoutes);

export default app;