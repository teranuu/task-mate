import styles from '../styles/navbar.module.css';

function Navbar(){


    return(
        <>

        <div className={styles.navbarContainer}>

            <div className={styles.navbarHeader}>

                <h1>taskmate</h1>
                
                <div className={styles.buttonContainer}>

                    <button type="button">Add Task</button>
                    <button type="button">Filter Status</button>

                </div>

                

            </div>

             <div className={styles.divider}/>
           
       
            

        </div>
        
        </>
    );

}

export default Navbar