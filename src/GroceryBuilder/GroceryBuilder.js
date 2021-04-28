import React, { Component } from "react";
import Grocery from "../Component/Grocery/Grocery";
import Cart from "../Component/Cart/Cart";
import "./GroceryBuilder.css";
import ClearCart from "../Component/clearCart/ClearCart";
import Filter from '../Component/Filter/Filter';

import Footer from "../Component/Footer/Footer";
class GroceryBuilder extends Component{

    state={
        products:{
            Strawberry:1,
            Blueberry:0,
            Banana:0,
            Orange:0,
            Apple:0,
            Carrot:1,
            Celery:0,
            Mushroom:0,
            Green_Pepper:0,
            Egg:1,
            Cheese:0,
            Butter:0,
            Fish:0,
            Chicken:1,
            Pork:0,
            Beef:0,
            Rice:1,
            Pasta:0,
            Bread:0,
        },
        shouldShow:0,
    }
    addItemHandler=(type)=>{
        let data={};
        data=this.state.products;
        data[type]++;
        let show = this.state.shouldShow;
        show++;
        this.setState({products:data,shouldShow:show,filterData:null});
    }
    decreaceproductHandler=(type)=>{
        let data={};
        data=this.state.products;
        if(data[type]>1){
        data[type]--;
        }
        let show = this.state.shouldShow;
        if(show>0){
        show--;
        }
        this.setState({products:data,shouldShow:show});
    }
    clearAllHandler=()=>{
       
        let data_item={};
           Object.keys(this.state.products).map((value,key)=>{
                data_item[value]=0;
            })
            this.setState({products:data_item});
     
    }

    render(){
        console.log(this.state.products);
        let data = Object.keys(this.state.products); 
        let show = false;
        let cart=data.map((value,key)=>{
            if(this.state.products[value]!==0){
                show=true;
            }
            return (this.state.products[value] >0 ? <Cart name={value} clicked={this.decreaceproductHandler} count={this.state.products[value]} key={value+key}/>:null);
        });

        let disable=false;
        if(!show)
        {
        disable=true;
        cart = <Cart name="Your Cart Is Empty!" clicked={(type)=>{return true}} key={123}/>
        }
      
        return(
            <div>
                <Filter products={this.state.products} clicked={this.addItemHandler}/>
                <div className="GroceryBuilder">  
                  <div className="grocery">
                    <Grocery clicked={this.addItemHandler}/>
                 </div>
                 <div className="cart">
                     <ClearCart disable={disable} clearAll={this.clearAllHandler} />
                     {cart}
                 </div>
              </div>
              <Footer/>
            </div>
           
        );
    }
}

export default GroceryBuilder;