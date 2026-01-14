import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import styles from "./dashboard.module.css";
import { useState, useEffect } from "react";
import api from "../../api/axios.js";

function Dashboard(){

    const [tasks, setTasks] = useState([]);
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredTasks = statusFilter === 'all' ? tasks : tasks.filter(task => task.status === statusFilter);
    useEffect(() => {

        const fetchTask = async() => {

            try{
                 const res = await api.get('/tasks');
                 setTasks(res.data);
            
            }catch(err){
                console.error(err);
            }
        };

        fetchTask();

    }, []);


    const handleUpdateTask = async(updatedTask) => {


        try{

            const res = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
            setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? res.data : task)
        );
        }catch(err){

            console.error('Failed to handle update task:', err);

        }
    }


    const deleteTask = async(id) => {
        try{
            await api.delete(`/tasks/${id}`);

            setTasks(prevTasks => prevTasks.filter(task => task.id !== id));

        }catch(err){
            console.error(err);
        }
    };

    const addTask = async(task) => {

        try{

            const res = await api.post('/tasks', task);
            setTasks(prev => [...prev, res.data]);

        }catch(err){ 
                console.error(err);
        }
        
    };

    

    
    return(
        <>
        
        <div className={styles.dashboardWrapper}>
            <Navbar statusFilter={statusFilter} onStatusChange={setStatusFilter} onAddTask={addTask}/>
            <Section tasks={filteredTasks} onDelete={deleteTask} onUpdate={handleUpdateTask} />
        </div>
        
        </>
    )

}

export default Dashboard