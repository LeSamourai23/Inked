import express from 'express';
import userRoutes from '../Routers/userRoutes';
import entryRoutes from '../Routers/entryRoutes';

const app = express();

app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet', entryRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});