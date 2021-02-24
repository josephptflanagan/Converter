import React from 'react';

const Modal = ({ onClose, currentConverter }) => {
    const { name, category, description, index } = currentConverter;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/img/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Modal;