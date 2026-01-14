import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req,res) => {
    res.json({status: 'ok'});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.use('/tasks', taskRoutes);