import React from 'react';
import './index.css';

const CartHeader = ({title,total}) => 
<div className='CartHeader'>
  <p>{title}</p>
  <p>{total}</p>
</div>;

export default CartHeader;