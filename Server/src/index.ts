import express from 'express';
import userRoutes from './Routers/userRoutes';
import entryRoutes from './Routers/entryRoutes';
import authRoutes from './Routers/authRoutes';
import { authenticateToken } from './Middlewares/authMiddleware';

const app = express();

app.use(express.json());
app.use('/user', authenticateToken, userRoutes);
app.use('/entry', authenticateToken, entryRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});