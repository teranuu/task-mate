import styles from './task.card.module.css';
import { Pencil, X } from 'lucide-react';
import { use, useState } from 'react';
import CheckboxRadix from '../Checkbox/CheckboxRadix';

function TaskCard({ description, status, createdAt, updatedAt}){

    const [done, setDone] = useState(false);

    return(

        <>
            <div className={styles.cardWrapper}>
                <div className={styles.headerRow}>

                    <div className={styles.headerW}>
                        <CheckboxRadix />
                        <button type="button" className={styles.taskCardbtn}>
                        <Pencil/>
                        </button>
                    </div>

                    <div className={styles.headerW}>
                        <div className={styles.statusBadge}>{status}</div>
                        <button type="button" className={styles.taskCardbtn}>
                        <X/>
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
        </>


    );

}

export default TaskCard;    