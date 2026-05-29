import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'User API is running. Use /users to manage users.' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
