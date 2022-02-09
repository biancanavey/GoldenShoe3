import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  return (

<ul className='cards__item'>
<Link className='cards__item__link' to={props.path}>
  <figure className='cards__item__pic-wrap' data-category={props.label}>
    <img
      className='cards__item__img'
      alt='Shoes'
      src={props.src}
    />
  </figure>
  <div className='cards__item__info'>
    <h5 className='cards__item__text'>{props.text}</h5>
  </div>
  <Rating
          rating={props.rating}
          numReviews={props.numReviews}
  ></Rating>
  <div className="price">${props.price}</div>
</Link>
</ul>
  );
}

 