import React from 'react';
import './Cards.css';
import OneProductItem from './OneProductItem';
import Img8 from './images/img8.jpg';



export default function OneProductItemCard() {
    return (
    
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <OneProductItem
               _id= '1'
               name= 'Mens Nike Running Trainers'
               category= 'Trainer'
               src={Img8}
               price= '120'
               brand= 'Nike'
               label='Womens'
               rating= '4.5'
               numReviews= '10'
               description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              </ul>
              </div>
              </div>
              </div>
    );
}