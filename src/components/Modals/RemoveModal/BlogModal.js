import Modal from 'react-modal';
import React from 'react';

function BlogModal({isOpen, closeModal}) {
    return (

        <Modal>
            <button >close</button>
            <div>
                <button >yes</button>
                <button >no</button>
            </div>
        </Modal>
    );
}

Modal.setAppElement('#app');

export default BlogModal;

