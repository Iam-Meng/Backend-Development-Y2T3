import { Article, User, Category } from '../models/index.js';

// Get all articles with author and category
export async function getAllArticles(req, res) {
  try {
    const articles = await Article.findAll({
      include: [
        { association: 'author', attributes: ['id', 'name', 'email'] },
        { association: 'category', attributes: ['id', 'name'] },
      ],
    });
    res.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

// Get article by ID
export async function getArticleById(req, res) {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: [
        { association: 'author', attributes: ['id', 'name', 'email'] },
        { association: 'category', attributes: ['id', 'name'] },
      ],
    });
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

// Create new article
export async function createArticle(req, res) {
  try {
    const { title, content, status, userId, categoryId } = req.body;

    // Validate that user and category exist
    const user = await User.findByPk(userId);
    const category = await Category.findByPk(categoryId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const newArticle = await Article.create({
      title,
      content,
      status: status || 'draft',
      userId,
      categoryId,
    });

    res.status(201).json(newArticle);
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

// Update article
export async function updateArticle(req, res) {
  try {
    const { title, content, status, categoryId } = req.body;
    const article = await Article.findByPk(req.params.id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    if (categoryId) {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
    }

    await article.update({ title, content, status, categoryId });
    res.json(article);
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

// Delete article
export async function deleteArticle(req, res) {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    await article.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
