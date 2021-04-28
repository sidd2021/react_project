import React, { Component } from "react";
import "./Cart.css";
class Cart extends Component{
  state={
    effect:"lightListcart",
    cutEffect:""
  }
    sendState=(type)=>{
      if(this.props.name==="Your Cart Is Empty!"){
        return;
      }
      this.setState({cutEffect:"cutEffect"});
        this.props.clicked(type);
    }
    render(){
      const effect_items = ["cart_items",this.state.effect].join(" ");
    return (
        <div className={effect_items}>
          <ul className={[this.state.cutEffect,"list_effect"].join(" ")}>
            <li  onClick={()=>this.sendState(this.props.name)}>
              <i className="fa fa-minus-square" aria-hidden="true"></i> 
              {this.props.count}
              <span>{this.props.name}</span></li>
          </ul>
        </div>
    );
    }
}

export default Cart;