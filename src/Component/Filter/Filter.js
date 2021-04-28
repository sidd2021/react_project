import React ,{Component} from "react";
import "./Filter.css";
import Cart from "../Cart/Cart";
class filter extends Component{
  state={
    finditem:null,
    cart:false,
  }
  changeHandler=(event)=>{
    this.setState({finditem:event.target.value});
  }

  submitHandler=(event)=>{
    event.preventDefault();
    if(this.state.finditem in this.props.products){
      this.setState({cart:true});
    }   
  }
  clickHandler=()=>{
    this.setState({cart:false});
  }
 render(){
   let filtercart=null;
   if(!this.state.cart && this.state.finditem!==null && !(this.state.finditem in this.props.products)){
     filtercart=<div className="filtercart" onClick={this.clickHandler}><h2>Not Found</h2></div>
   }
   if(this.state.cart){
     filtercart=<div className="filtercart" onClick={this.clickHandler}><Cart name={this.state.finditem} clicked={this.props.clicked}/></div>
   }
  return (
    <div className="upperdiv">
          <form className="filter" onSubmit={this.submitHandler}>
          <input type="textarea" placeholder="Apply filter Eg Apple,Orange etc" className="inputEffect" 
           onChange={this.changeHandler}></input>
          </form>
        {filtercart}
    </div>

  );
 }
}

export default filter;