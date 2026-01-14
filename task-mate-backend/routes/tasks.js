import express from 'express';
import { db } from '../db.js';

const router = express.Router();

// router.get('/', (req, res) => {

//     db.query('SELECT * FROM tasks', (err, results) => {
//         if (err) return res.status(500).json(err);
//         res.json(results);
//     });

// }); this is callback version for reference, but async/await is cleaner

router.get('/', async (req, res) => {

    try{
        const [results] = await db.query('SELECT * FROM tasks');
        res.json(results);

    }catch(err){
        console.error(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
    });
    
router.post('/', async (req, res) => {
    const { title, description, status } = req.body;

    if(!title || title.trim() === ''){
        return res.status(400).json({ error: 'Title is required' });

    }

    try{
        const[result] = await db.query('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
        [title, description, status]);

        const [[newTask]] = await db.query(
            'SELECT * FROM tasks WHERE id = ?',
            [result.insertId]
        ); //understand this shit i dont fucking get it
        
        res.status(201).json(newTask);
     
    }catch(err){
        console.error(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);

        if(result.affectedRows === 0){
            return  res.status(404).json({ error: 'Task not found' });
        }

        res.status(204).send();

    }catch(err){

        console.error(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

     if(!title || title.trim() === ''){

        console.error(err);
        return res.status(400).json({ error: 'Title is required' });

    }

    try{

       const[result] = await db.query('UPDATE tasks SET title = ?, description = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', 
        [title, description, status, id]);

        if(result.affectedRows === 0){
            return  res.status(404).json({ error: 'Task not found' });
        }

        const [[updatedTask]] = await db.query(
            'SELECT * FROM tasks WHERE id = ?',
            [id]
        ); //understand this shit i dont fucking get it

        res.status(200).json(updatedTask);

    }catch(err){

        console.error(err);
        res.status(500).json({error: 'Internal Server Error'}); 

    }
});

export default router;