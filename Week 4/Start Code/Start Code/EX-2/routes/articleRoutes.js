import express from 'express';
import {
    listArticles,
    getArticle,
    listArticlesByCategory,
    listArticlesByJournalist
} from '../controllers/articleController.js';

const router = express.Router();

router.get('/', listArticles);
router.get('/:id', getArticle);
router.get('/category/:categoryId', listArticlesByCategory);
router.get('/journalist/:journalistId', listArticlesByJournalist);

export default router;
