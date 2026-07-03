-- Create database if not exists
CREATE DATABASE IF NOT EXISTS articles_db;

-- Use the database
USE articles_db;

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    journalist VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO articles (title, content, journalist, category) VALUES
('React Basics', 'Learn React', 'Alice', 'Frontend'),
('Routing', 'React Router', 'Bob', 'Frontend');
