import styles from '../styles/section.module.css';
import TaskCard from '../../../components/TaskCard/TaskCard.jsx';

function Section({ tasks, onDelete, onUpdate }){



    return(
        <>
            <div className={styles.sectionWrapper}>
                {
                    tasks.map(task => (
                        <TaskCard key={task.id}
                                  task={task}
                                  onDelete ={onDelete}
                                  onUpdate ={onUpdate}
                        />  
                    ))
                }
            </div>
        </>
    );

}

export default Section