import React from 'react';
import './index.css';

const CartFooter = () => (
  <div className="CartFooter">
    <form >
      <input className="CartFooterInput"
      placeholder='Nome'/>
      <input className="CartFooterInput"
      placeholder='Preço'/>
      <button className="CartFooterButton">Salvar</button>
    </form>
  </div>
);

export default CartFooter;