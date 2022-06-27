import React from 'react';

export default function ModalCard({ setIsOpen, cover_image, title }) {
  const handleClosing = () => setIsOpen(false);
  return (
    <div>
      <div className='modal-card'>
        <div className='centered'>
          <div className='modal'>
            <button className='closeBtn' onClick={() => handleClosing()}>
              X
            </button>
            <img src={cover_image} className='modal-image' alt='modal-image' />
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
