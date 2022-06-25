import React from 'react';

export default function DiscBox({
  title,
  cover_image,
  genre,
  year,
  country,
  format,
  label,
}) {
  return (
    <div className='card'>
      <div>
        <img src={cover_image} className='img' alt='cover_image' />
        <h2>{title}</h2>
        <h5>{genre}</h5>
        <h5>{year}</h5>
        <h5>{country}</h5>
        <h6>{format}</h6>
        <h6>{label}</h6>
      </div>
    </div>
  );
}
