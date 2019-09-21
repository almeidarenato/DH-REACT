import React from 'react';
import logo from '../../assets/logo.svg';
import './index.css';
import Cart from '../Cart';

class App extends React.Component{
  state= {products:[{
    id:1,
    name: 'Produto',
    price: 100.00
  },
  {
    id:2,
    name: 'Produto2',
    price: 200.00
  }]
}

deleteProduct (productId) {
  this.setState ({ products:this.state.products.filter((product)=>
    product.id !== productId
  ) })

}
  render(){ // renderiza o HTML
    const {products = []} = this.state; // define um valor padrão para o state

    return (
      
      <div className="App">
        <Cart 
        products = {products}
        onDeleteProduct ={this.deleteProduct.bind(this)} 
        />
        </div>
      
);
  }
}

/* const App = () =>{
  
}
*/
export default App;
