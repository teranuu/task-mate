import styles from './add.modal.module.css';
import SelectRadix from '../Select/SelectRadix';
import Modal from '../Modal/Modal';
import { Network, SquarePlus } from 'lucide-react';
import { useState } from 'react';

function AddTaskModal({ isOpen, onClose, onAddTask }){

    const [status, setStatus] = useState('todo');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    
    const submit = () => {
        const now = new Date().toISOString();

        onAddTask({
            id: crypto.randomUUID(),
            title,
            description,
            status,
            created_at: now,
            updated_at: now,
        });

        setTitle('');
        setDescription('');
        setStatus('pending');
    };

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
        
                                <SelectRadix style={{width: '3rem'} } value={status} onValueChange={setStatus}/>
                                
                                <div className={styles.inputWrapper} style={{height:"3rem", display:"flex", alignItems:"center"}}>
                                    
                                        <input type="text"  className={styles.formChild} style={{justifyContent:"center"}} placeholder="Set Task Title here" value={title} onChange={e => setTitle(e.target.value)} />
                                
                                </div>

                                <div className={styles.inputWrapper}>
                                    
                                        <textarea type="text"  className={styles.formChild} placeholder="Set Description here" value={description} onChange={e => setDescription(e.target.value)} />
                                
                                </div>
                                
                                
                                <div className={styles.btnWrapper} style={{
                                    justifyContent:'flex-end',
                                    gap:'0.7rem'
                                }}>
                                    <button onClick={ () => {
                                        onClose(); 
                                        submit();
                                        }}>Save Changes</button>
                                    <button>Reset Changes</button>
                                </div>
                                
                            </div>
                            
        
        </Modal>

        </>
    );

}

export default AddTaskModal;