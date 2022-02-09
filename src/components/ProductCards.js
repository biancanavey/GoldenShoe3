import React from 'react';
import './Cards.css';
import ProductItem from './ProductItem';
import Img7 from './images/img7.jpg';
import Img9 from './images/review_3.jpg';
import Img8 from './images/img8.jpg';
import Img10 from './images/img10.jpg';
import Img11 from './images/img11.jpg';

function ProductCards() {
    return (
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <ProductItem
               _id= '1'
               text= 'Nude Heels'
               category= 'Heels'
               src= {Img7}
               price= '120'
               brand= 'Nike'
               label='Womens'
               rating= '4.5'
               numReviews= '10'
               description= 'high quality product'
              />
              <ProductItem
               _id= '2'
               text= 'Adidas Trainers'
               category= 'Trainers'
               src= {Img9}
               price= '100'
               brand= 'Adidas'
               label='Kids'
               rating= '3.0'
               numReviews= '5'
               description= 'high quality product'
              />
              <ProductItem
                _id = '3'
                text = 'Nike Trainers'
                src={Img8}
                name = 'Trainers'
                rating= '5.0'
                numReviews = '200'
                price = '200'
                label='Mens'
                description= 'high quality product'
                path='/OneProduct'
              />
              <ProductItem
                _id = '4'
                text = 'Adidas Trainers'
                src={Img10}
                name = 'Trainers'
                rating= '4.5'
                numReviews = '90'
                price = '120'
                label='Womens'
                path='/OneProduct'
              />
              <ProductItem
                _id = '5'
                text= 'Puma Trainers'
                src={Img11}
                name = 'Trainers'
                rating= '3.5'
                numReviews = '60'
                price = '90'
                label='Womens'
                path='/OneProduct'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCards;
  