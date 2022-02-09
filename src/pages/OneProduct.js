import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import {Button} from '../components/Button';
import OneProductItemCard from '../components/OneProductItemCard';



export default function ProductScreen() {

  return (
    <div>
      <Link to="/products">Back to result</Link>
     <OneProductItemCard/>
     {/* <DropdownButton id="dropdown-basic-button" title="Size">
      <Dropdown.Item href="#/action-1">7</Dropdown.Item>
      <Dropdown.Item href="#/action-2">8</Dropdown.Item>
      <Dropdown.Item href="#/action-3">9</Dropdown.Item>
    </DropdownButton> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Add to Cart
        </Button>
        
          </div>
  );
                    }
