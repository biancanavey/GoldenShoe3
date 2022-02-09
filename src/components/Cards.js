import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Img7 from './images/img7.jpg';
import Img9 from './images/review_3.jpg';
import Img8 from './images/img8.jpg';
import Img1 from './images/img1.jpg';
import Img12 from './images/img12.jpg';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Img7}
              text='Valentines specials'
              label='Womens'
              path='/products'
            />
            <CardItem
              src={Img8}
              text='Always on the move'
              label='Mens'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Img9}
              text='Comfortable, Durable, Playful'
              label='Kids'
              path='/products'
            />
            <CardItem
              src={Img1}
              text='UP TO 40% off trainers'
              label='Sale'
              path='/products'
            />
            <CardItem
              src={Img12}
              text='GoldenShoes more than just a job'
              label='Careers'
              path='/careers'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
