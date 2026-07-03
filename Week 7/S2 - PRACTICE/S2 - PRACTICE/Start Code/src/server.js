import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import { User, Category, Article } from './models/index.js';
import userRouter from './routes/userRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import articleRouter from './routes/articleRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/api/users', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/articles', articleRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 4000;

// Sync database and start server
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
    process.exit(1);
  });

export default app;
