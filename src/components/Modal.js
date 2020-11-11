import React from 'react'

function Modal({onClose, children}) {
    return (
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onClick={()=>onClose()}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modal
