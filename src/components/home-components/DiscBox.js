import React from 'react';
import { useState } from 'react';
import ModalCard from './ModalCard';

export default function DiscBox({ title, cover_image }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className='card' onClick={() => setIsOpen(true)}>
        <div>
          <img src={cover_image} className='cover-image' alt='cover_image' />
          <h2>{title}</h2>
        </div>
      </div>
      {isOpen && (
        <ModalCard
          title={title}
          cover_image={cover_image}
          setIsOpen={setIsOpen}
        />
      )}
      ;
    </div>
  );
}
