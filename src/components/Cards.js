import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Training and Capacity Development Services'
              label='TCDS'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Microsoft Solutions: Implementation and Delivery Services'
              label='Microsoft-IDS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Technology and Systems: Implementation and Delivery Services'
              label='TS-IDS'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='ISO Management System: Implementation and Adoption Services'
              label='ISO-IAS'
              path='/about'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Best Practice Methodology: Implementation and Adoption Services'
              label='BPM-IAS'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
