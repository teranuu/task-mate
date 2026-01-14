import styles from './edit.modal.module.css';
import Modal from '../Modal/Modal';
import SelectRadix from '../Select/SelectRadix';
import { Pen } from 'lucide-react';
import { useEffect, useState } from 'react';

function EditTaskModal({ isOpen, onClose, onUpdate, task }){

    const { 
        title: initialTitle, 
        description: initialDescription, 
        status: initialStatus, 
    } = task;

    const[title, setTitle] = useState(initialTitle);
    const[description, setDescription] = useState(initialDescription);
    const[status, setStatus] = useState(initialStatus);

    useEffect(() => {
        setTitle(initialTitle);
        setDescription(initialDescription);
        setStatus(initialStatus);
    }, [initialTitle, initialDescription, initialStatus]);

    const handleSave = () => {

        onUpdate({
            ...task,
            title,
            description,
            status,
        });
        onClose();

    }

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
                                        <Pen className={styles.iconModal}/>
                                        <h2 style={{fontFamily:'Archivo', fontWeight: 500, margin: '0'}}>Edit Task Description</h2>
                                    </div>
                                </div>
                            
                                <div className={styles.divider} style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}/>
        
                                <SelectRadix style={{width: '3rem'}} placeholder="Status" value={status} onValueChange={setStatus}/>

                                <div className={styles.inputWrapper} style={{height:"3rem", display:"flex", alignItems:"center"}}>
                                                                    
                                        <input type="text"  className={styles.formChild} style={{justifyContent:"center"}} value={title} onChange = {(e) => setTitle(e.target.value) }placeholder="Edit Task Title here"/>
                                                                
                                </div>
                                    
                                <div className={styles.inputWrapper}>
                                    
                                        <textarea type="text"  className={styles.formChild} value={description} onChange = {(e) => setDescription(e.target.value)} placeholder="Edit Description here"/>
                                    
                                </div>
                                
                                
                                <div className={styles.btnWrapper} style={{
                                    justifyContent:'flex-end',
                                    gap:'0.7rem'
                                }}>
                                    <button onClick={handleSave}>Save Changes</button>
                                    <button onClick={() => {
                                        setTitle(initialTitle);
                                        setDescription(initialDescription);
                                        setStatus(initialStatus);
                                    }}>Reset Changes</button>
                                </div>
                                
                            </div>
                            
        
        </Modal>

        </>
    );

}

export default EditTaskModal;