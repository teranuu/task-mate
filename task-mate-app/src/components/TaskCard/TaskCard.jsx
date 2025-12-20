import styles from './task.card.module.css';

function TaskCard({ description , titleHeader}){


    return(

        <>
            <div className={styles.cardWrapper}>
                <h2 className={styles.header}>{titleHeader}</h2>
                <p className={styles.Desc}>{description}</p>
            </div>
        </>
    );

}

export default TaskCard;    