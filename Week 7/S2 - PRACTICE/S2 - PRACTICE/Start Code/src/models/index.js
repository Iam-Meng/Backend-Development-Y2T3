import User from './User.js';
import Category from './Category.js';
import Article from './Article.js';

// Define relationships

// User has many Articles
User.hasMany(Article, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

// Article belongs to User
Article.belongsTo(User, {
  foreignKey: 'userId',
  as: 'author',
});

// Category has many Articles
Category.hasMany(Article, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
});

// Article belongs to Category
Article.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category',
});

export { User, Category, Article };
