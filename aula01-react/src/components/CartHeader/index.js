import React from 'react';
import './index.css';

const CartHeader = ({title,total}) => 
<div className='CartHeader'>
  <p className='CartTitle'>{title}</p>
  <p className='CartTotal'>{total}</p>
</div>;

export default CartHeader;