import React, { Component } from "react";
import "./Grocerry.css";
class Grocery extends Component{
    sendState=(name)=>{
          this.props.clicked(name);
    }
    render(){
    return (
        <div>
            
            <div className="head">
            <i className="fa fa-leaf" aria-hidden="true"></i>
            <h2 >Groceries</h2>
            </div>
         <ul className="grocerry">
            <li className="lightList" onClick={()=>this.sendState("Strawberry")}><i className="fa fa-plus-square" aria-hidden="true"></i>Strawberry</li>
            <li className="darkList" onClick={()=>this.sendState("Blueberry")}><i className="fa fa-plus-square" aria-hidden="true"></i>Blueberry</li>
            <li className="lightList" onClick={()=>this.sendState("Orange")}><i className="fa fa-plus-square" aria-hidden="true"></i>Orange</li>
            <li className="darkList" onClick={()=>this.sendState("Banana")}><i className="fa fa-plus-square" aria-hidden="true"></i>Banana</li>
            <li className="lightList" onClick={()=>this.sendState("Apple")}><i className="fa fa-plus-square" aria-hidden="true"></i>Apple</li>
            <li className="darkList" onClick={()=>this.sendState("Carrot")}><i className="fa fa-plus-square" aria-hidden="true"></i>Carrot</li>
            <li className="lightList" onClick={()=>this.sendState("Celery")}><i className="fa fa-plus-square" aria-hidden="true"></i>Celery</li>
            <li className="darkList" onClick={()=>this.sendState("Mushroom")}><i className="fa fa-plus-square" aria-hidden="true"></i>Mushroom</li>
            <li className="lightList" onClick={()=>this.sendState("Green_Pepper")}><i className="fa fa-plus-square" aria-hidden="true"></i>Green Pepper</li>
            <li className="darkList" onClick={()=>this.sendState("Egg")}><i className="fa fa-plus-square" aria-hidden="true"></i>Eggs</li>
            <li className="lightList" onClick={()=>this.sendState("Cheese")}><i className="fa fa-plus-square" aria-hidden="true"></i>Cheese</li>
            <li className="darkList" onClick={()=>this.sendState("Butter")}><i className="fa fa-plus-square" aria-hidden="true"></i>Butter</li>
            <li className="lightList" onClick={()=>this.sendState("Chicken")}><i className="fa fa-plus-square" aria-hidden="true"></i>Chicken</li>
            <li className="darkList" onClick={()=>this.sendState("Fish")}><i className="fa fa-plus-square" aria-hidden="true"></i>Fish</li>
            <li className="lightList" onClick={()=>this.sendState("Pork")}><i className="fa fa-plus-square" aria-hidden="true"></i>Pork</li>
            <li className="darkList" onClick={()=>this.sendState("Beef")}><i className="fa fa-plus-square" aria-hidden="true"></i>Beef</li>
            <li className="lightList" onClick={()=>this.sendState("Rice")}><i className="fa fa-plus-square" aria-hidden="true"></i>Rice</li>
            <li className="darkList" onClick={()=>this.sendState("Pasta")}><i className="fa fa-plus-square" aria-hidden="true"></i>Pasta</li>
            <li className="lightList" onClick={()=>this.sendState("Bread")}><i className="fa fa-plus-square" aria-hidden="true"></i>Bread</li>
         </ul>
    </div>
    );
    }
}

export default Grocery;