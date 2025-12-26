import styles from './modal.module.css';

function Modal({ isOpen, onClose, children, style}){

    return(

        <>
            <div className={styles.modalOverlayWrapper} onClick={onClose}>

                <div className={styles.modalContent}  onClick={(e) => e.stopPropagation()} style={style}>
                    {children}
                </div>
            </div>
        </>
    );

}

export default Modal;