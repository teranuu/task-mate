import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import styles from "./dashboard.module.css";

function Dashboard(){

    return(
        <>
        
        <div className={styles.dashboardWrapper}>
            <Navbar/>
            <Section/>
        </div>
        
        </>
    )

}

export default Dashboard