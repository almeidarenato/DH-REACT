import React from 'react';
import './index.css';
import CartHeader from '../CartHeader';
import Product from '../Product';
import PropTypes from 'prop-types';
import CartFooter from '../CartFooter';

//define um componente
const Cart = ({products,onDeleteProduct}) =>  {
const getTotalPrice = (products) => {
  let total = 0;

  for (let product of products) {
    total = total + product.price;
  }

  return total;
};

return (
  <div>
    <CartHeader 
      title='Total do Carrinho:' 
      total= {getTotalPrice(products)}
    />
    {products.map((product)=>(
    <Product 
      key={product.id} 
      name={product.name} 
      price={product.price}
      onDelete={()=> onDeleteProduct(product.id)}
    />
    
    )  // essa function utiliza parenteses para retornar diretamente a tag
    
    )} 
    <CartFooter />
  </div>
  )
};

// define os tipos de props que o componente Product pode receber
Cart.propTypes= {
  products:PropTypes.arrayOf(
    // PropTypes.object -- array de objetos
    PropTypes.shape({
      id: PropTypes.number.isRequired, // define um valor que é obrigatório 
      name: PropTypes.string,
      price: PropTypes.number
    }) // define um objeto com valores determinados
  )
  // products: PropTypes.array // um array
};
// define um valor padrão para o prop caso não receba um valor ele assume
Cart.defaultProps = {
  products: [{id:1 , name:'produtoteste',price:0.00}] // preenchendo com valores default
};

// Por utilizar o webpack ao final de cada componente é necessário utilizar o export default. 
// Este componente poderá ser importado por outro.
export default Cart;