import styles from './add.modal.module.css';
import SelectRadix from '../Select/SelectRadix';
import Modal from '../Modal/Modal';
import { SquarePlus } from 'lucide-react';

function AddTaskModal({ isOpen, onClose, task}){

    return(
        <>  

        <Modal isOpen={isOpen} 
               onClose={onClose} 
               style={{flexDirection: 'column'}}>
                            
                            <div className={styles.modalWrapper}style={{
                                flexDirection: 'column',
                                gap:'1.2rem'
                                }}>
        
                                <div className={styles.headerRow} style={{margin: '0'}}>
                                    <div className={styles.headerW} style={{width: '100%', gap: '1.2rem', padding: '0'}}>  
                                        <SquarePlus className={styles.iconModal}/>
                                        <h2 style={{fontFamily:'Archivo', fontWeight: 500, margin: '0'}}>Add Task</h2>
                                    </div>
                                </div>
                            
                                <div className={styles.divider} style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}/>
        
                                <SelectRadix style={{width: '3rem'}}/>
                                    
                                <div className={styles.inputWrapper}>
                                    <form className={styles.formParent}>
                                        <textarea type="text"  className={styles.formChild}></textarea>
                                    </form>
        
                                </div>
                                
                                
                                <div className={styles.btnWrapper} style={{
                                    justifyContent:'flex-end',
                                    gap:'0.7rem'
                                }}>
                                    <button onClick={onClose}>Save Changes</button>
                                    <button>Reset Changes</button>
                                </div>
                                
                            </div>
                            
        
        </Modal>

        </>
    );

}

export default AddTaskModal;