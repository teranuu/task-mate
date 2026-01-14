import styles from './task.card.module.css';
import { Pencil, X } from 'lucide-react';
import { useState } from 'react';
import CheckboxRadix from '../Checkbox/CheckboxRadix';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
function TaskCard({  task, onDelete, onUpdate }){

    const { title, description, status, created_at, updated_at } = task;

    const [done, setDone] = useState(false); //add logic for checkbox state (NOT YET IMPLEMENTED)
    const [isModalOpen, setIsModalOpen] = useState(false); //logic for edit modal state (DONE)
    
        const formatDate = (timeStamp) => {
            if (!timeStamp) return 'Invalid Date';
            const date = new Date(timeStamp);
            return isNaN(date) ? 'Invalid Date' : date.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
      });
    };

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
                        <button type="button" className={styles.taskCardbtn} onClick={() => onDelete(task.id)}>
                        <X className={styles.icon} />
                        </button>
                    </div>
                    
                </div>

                <div className={styles.divider}/>

                <h2 className={styles.title}>{title}</h2>
                
                <p className={styles.Desc}>{description}</p>

                <div className={styles.footerRow}>
                    <p className={styles.footerText}>Created on: {formatDate(created_at)}</p>
                    <p className={styles.footerText}>Updated at: {formatDate(updated_at)}</p>
                </div>
            </div>

        
            { isModalOpen && (
                 <EditTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} task={task} onUpdate={onUpdate}/>
            )}
               
        </>


    );

}

export default TaskCard;    