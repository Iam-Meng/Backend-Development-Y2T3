import { articles, journalists, categories } from './data.js';

export const getArticles = () => articles;

export const getArticleById = (id) => articles.find(article => article.id === id);

export const getArticlesByCategory = (categoryId) =>
    articles.filter(article => article.categoryId === categoryId);

export const getArticlesByJournalist = (journalistId) =>
    articles.filter(article => article.journalistId === journalistId);

export const getJournalistById = (id) => journalists.find(journalist => journalist.id === id);

export const getCategoryById = (id) => categories.find(category => category.id === id);
