import styles from '../styles/navbar.module.css';
import { useState, useEffect } from 'react';
import AddTaskModal from '../../../components/AddTaskModal/AddTaskModal';
import SelectRadixFilter from '../../../components/SelectRadixFilter/SelectRadixFilter';

function Navbar({ onAddTask, statusFilter, onStatusChange }){

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    

    return(
        <>

        <div className={styles.navbarContainer}>

            <div className={styles.navbarHeader}>

                <h1>task mate</h1>
                
                <div className={styles.buttonContainer}>

                    <button type="button" style={{ backgroundColor: '#000', width: '8rem' }} onClick={() => setIsAddModalOpen(true)}>Add Task</button>
                    <SelectRadixFilter value={statusFilter} onValueChange={onStatusChange} placeHolder="Filter Status"/>

                </div>

                

            </div>

             <div className={styles.divider}/>
           
           { isAddModalOpen && (
                <AddTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAddTask={onAddTask} />
           )}
       
            

        </div>
        
        </>
    );

}

export default Navbar