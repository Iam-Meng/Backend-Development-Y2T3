import {
    getArticles,
    getArticleById,
    getArticlesByCategory,
    getArticlesByJournalist,
    getJournalistById,
    getCategoryById
} from '../models/articleModel.js';

export const listArticles = (req, res) => {
    const articles = getArticles();
    res.json(articles);
};

export const getArticle = (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    const article = getArticleById(articleId);
    if (!article) {
        return res.status(404).json({ error: 'Article not found' });
    }
    const journalist = getJournalistById(article.journalistId);
    const category = getCategoryById(article.categoryId);

    res.json({
        ...article,
        journalist,
        category
    });
};

export const listArticlesByCategory = (req, res) => {
    const categoryId = parseInt(req.params.categoryId, 10);
    const articles = getArticlesByCategory(categoryId);
    res.json(articles);
};

export const listArticlesByJournalist = (req, res) => {
    const journalistId = parseInt(req.params.journalistId, 10);
    const articles = getArticlesByJournalist(journalistId);
    res.json(articles);
};
