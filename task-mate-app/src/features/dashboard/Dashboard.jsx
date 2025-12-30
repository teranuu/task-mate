import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import styles from "./dashboard.module.css";
import { useState } from "react";
function Dashboard(){

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks(prev => [...prev, task]);
    }
    return(
        <>
        
        <div className={styles.dashboardWrapper}>
            <Navbar onAddTask={addTask}/>
            <Section tasks={tasks}/>
        </div>
        
        </>
    )

}

export default Dashboard