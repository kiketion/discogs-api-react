import React, { Fragment } from 'react';

export default function ModalCard({
  setIsOpen,
  cover_image,
  title,
  format,
  year,
}) {
  const handleClosing = () => setIsOpen(false);
  return (
    <>
      <div className='modal-background' onClick={() => handleClosing()}></div>
      <div className='modal-card'>
        <div className='centered'>
          <div className='modal'>
            <img src={cover_image} className='modal-image' alt='modal-img' />
            <div className='modal-text-content'>
              <h2>{title}</h2>
              <h4>{format.join(', ')}</h4>
              <h4>{year}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
