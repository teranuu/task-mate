import styles from '../styles/navbar.module.css';
import { useState } from 'react';
import AddTaskModal from '../../../components/AddTaskModal/AddTaskModal';
function Navbar(){

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return(
        <>

        <div className={styles.navbarContainer}>

            <div className={styles.navbarHeader}>

                <h1>Task Mate</h1>
                
                <div className={styles.buttonContainer}>

                    <button type="button" onClick={() => setIsAddModalOpen(true)}>Add Task</button>
                    <button type="button">Filter Status</button>

                </div>

                

            </div>

             <div className={styles.divider}/>
           
           { isAddModalOpen && (
                <AddTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
           )}
       
            

        </div>
        
        </>
    );

}

export default Navbar