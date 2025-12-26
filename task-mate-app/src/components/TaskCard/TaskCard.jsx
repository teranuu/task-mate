import styles from './task.card.module.css';
import { Pencil, X } from 'lucide-react';
import {useState } from 'react';
import CheckboxRadix from '../Checkbox/CheckboxRadix';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
function TaskCard({ description, status, createdAt, updatedAt}){

    const [done, setDone] = useState(false); //add logic for checkbox DONE
    const [isModalOpen, setIsModalOpen] = useState(false); //logic for edit modal

    return(

        <>
            <div className={styles.cardWrapper}>
                <div className={styles.headerRow}>

                    <div className={styles.headerW}>
                        <CheckboxRadix />
                        <button type="button" className={styles.taskCardbtn} onClick={()=>setIsModalOpen(true)}>
                        <Pencil className={styles.icon}/>
                        </button>
                    </div>

                    <div className={styles.headerW}>
                        <div className={styles.statusBadge}>{status}</div>
                        <button type="button" className={styles.taskCardbtn}>
                        <X className={styles.icon}/>
                        </button>
                    </div>
                    
                </div>

                <div className={styles.divider}/>
                
                <p className={styles.Desc}>{description}</p>

                <div className={styles.footerRow}>
                    <p className={styles.footerText}>Created on: {createdAt}</p>
                    <p className={styles.footerText}>Updated at: {updatedAt}</p>
                </div>
            </div>

        
            { isModalOpen && (
                 <EditTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} task={{description, status, createdAt, updatedAt}}/>
            )}
               
        </>


    );

}

export default TaskCard;    