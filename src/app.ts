import express from 'express';
import articleRoutes from './modules/articles/article.routes.js';
import userRoutes from './modules/users/user.routes.js';
import authRoutes from './modules/auth/auth.routes.js';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use('/articles', articleRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

export default app;