import styles from '../styles/section.module.css';
import TaskCard from '../../../components/TaskCard/TaskCard.jsx';

function Section({ tasks }){


    return(
        <>
            <div className={styles.sectionWrapper}>
                {
                    tasks.map(task => (
                        <TaskCard key={task.id}
                                  description={task.description} 
                                  status ={task.status}
                        />  
                    ))
                }
            </div>
        </>
    );

}

export default Section