import express from 'express';
import articleRoutes from './routes/articleRoutes.js';

const app = express();
app.use(express.json());

app.use('/articles', articleRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Article API is running. Use /articles to view articles.' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
