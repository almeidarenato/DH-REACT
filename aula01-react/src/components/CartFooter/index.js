import React from 'react';
import './index.css';

// p/ tornar o componente StateFul basta torna-lo uma classe

class CartFooter extends React.Component {
  state = {
    name: '',
    price:0
  }
  onNameChange (e){
    this.setState({name: e.target.value}); //método que faz a alteração (render) [ComponentLifeCycle]
  }
  onPriceChange(e) {
    this.setState({price: parseInt(e.target.value)
    }); 
  }

  onSave (e) {
    e.preventDefault();
    const { onAddProduct } = this.props;
    onAddProduct(this.state)
 }

  render(){
    const {name,price}= this.state; //estados do componente
    return ( 
      
      <div className="CartFooter">
      <form className='CartFooterForm' onSubmit={this.onSave.bind(this)}>
      <input className="CartFooterInput"
      placeholder='Nome'
      value={name} /* estado name*/
      onChange = {this.onNameChange.bind(this)}/>  
    {/* método para mudança de valor */}

      <input type='number'
      className="CartFooterInput"
      placeholder='Preço'
      value={price}
      onChange = {this.onPriceChange.bind(this)}/>
      <button className="CartFooterButton">Salvar</button>
      </form>
      </div>
      )
    }
  }
  
  
  export default CartFooter;