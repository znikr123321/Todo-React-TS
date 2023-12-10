
import "/src/modal.css"

interface ModalProps {
    active: boolean,
    setActive: (bolean: boolean) => void
}


const Modal = ({active, setActive}:ModalProps) => {
    return (  
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                
            </div>
        </div>
    );
}

export default Modal;