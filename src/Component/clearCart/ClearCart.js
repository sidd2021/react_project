import React from "react";
import "./clearCart.css";
const clearCart = (props)=>{
    let disable = props.disable;
    if(disable){
        disable="cartDisable";
    }
    return (
       <div className="clearcart">
           <div className="carthead">
               <div className="cartFlow">
                 <i className={["fa fa-shopping-basket","basketicon"].join(" ")} aria-hidden="true"></i>
               </div>
               <div className="cartFlow">
                 <h2 className="cartheading">Cart</h2>
                 </div>
                 <div className={["cartflow","trasheffect",disable].join(" ")}>
                 <i className="fa fa-trash" aria-hidden="true" onClick={props.clearAll}></i>
                 </div>
            </div>
   </div>
    );
}
export default clearCart;