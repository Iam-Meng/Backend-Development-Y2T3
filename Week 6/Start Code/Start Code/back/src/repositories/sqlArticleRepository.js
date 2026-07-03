import { pool } from "../utils/database.js";

// Get all articles
export async function getArticles() {
    const [rows] = await pool.query("SELECT * FROM articles");
    return rows;
}

// Get one article by ID
export async function getArticleById(id) {
    const [rows] = await pool.query("SELECT * FROM articles WHERE id = ?", [id]);
    return rows.length > 0 ? rows[0] : null;
}

// Create a new article
export async function createArticle(article) {
    const { title, content, journalist, category } = article;
    const [result] = await pool.query(
        "INSERT INTO articles (title, content, journalist, category) VALUES (?, ?, ?, ?)",
        [title, content, journalist, category]
    );
    return { id: result.insertId, ...article };
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    const { title, content, journalist, category } = updatedData;
    const [result] = await pool.query(
        "UPDATE articles SET title = ?, content = ?, journalist = ?, category = ? WHERE id = ?",
        [title, content, journalist, category, id]
    );
    
    if (result.affectedRows === 0) return null;
    
    const updatedArticle = await getArticleById(id);
    return updatedArticle;
}

// Delete an article by ID
export async function deleteArticle(id) {
    const [result] = await pool.query("DELETE FROM articles WHERE id = ?", [id]);
    return result.affectedRows > 0;
}
