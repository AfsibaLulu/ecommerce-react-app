import React from 'react'
 import { useContext ,useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";

import styles from '../../src/styles/Cart.module.css';
import CartContext from '../context/CartContext';



function Cart() {




    const {cart,increaseQuantity,decreaseQuantity,removeFromCart} =useContext(CartContext);
    const navigate = useNavigate();
    const [total,setTotal] =useState(0);
    const [itemCount,setItemCount] =useState(0);

    function onClickDecrease(id){
  
        console.log("handleDecrease");
        decreaseQuantity(id);
    
    }
    function onClickIncrease(id){
        console.log("handleIncrease");
        increaseQuantity(id);
    }
    function onClickRemove(id){
        removeFromCart(id);
    }
    function onClickContinue(){
        navigate('/products');
       
    }
    const calculateTotal=()=>{
        let totalAmount = 0;

        cart.forEach((item)=>{
            totalAmount= totalAmount + (item.price * item.quantity);
        });
        setTotal(totalAmount);

    }
    const calculateItems =()=>{
        let totalItems =0;

        cart.forEach((item)=>{
            totalItems= totalItems + item.quantity;
        });
        // console.log("Item Count is : ",totalItems)
        setItemCount(totalItems);
    }
    useEffect(calculateItems,[cart]);
    useEffect(calculateTotal,[cart]);

    return ( 
        <div className="container">
            <h3>🛒Cart</h3>
{            (cart.length === 0) ?(
            <p>Shopping Cart is empty</p>) :
            (cart.map((item) => (
                <div key={item.id} className="d-flex m-1 p-2  border">
                    <div className=" col-2 m-2 ">
                        <img src={item.image} alt= {item.title} width={100}/>
                    </div>
                    <div className=" col-9 m-2 ">
                        <div className="d-flex justify-content-between ">
                            <h5 className="m-2">{item.title}</h5>
                            <p className="m-2 fw-bold">Price: ₹{item.price}</p>
                        </div>
                        <div className=" d-flex  col-4">
                            <div className=" d-flex ">
                                <label  className="form-label m-2">Quantity :</label>
                                <div className={`input-group ${styles.quantityBtnGrp}`}>
                                    <button type="button" className="btn btn-outline-secondary "onClick={()=>onClickDecrease(item.id)}>-</button>
                                    <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                                    <button className="btn btn-outline-secondary"type="button" onClick={()=>onClickIncrease(item.id)}>+</button>

                                </div>
                            </div>

                            <div><button className="btn btn-secondary  mx-2" onClick={()=>onClickRemove(item.id)}>Remove</button></div>
                        </div>
                    </div>                   
                </div>
            )))}
            <div className="d-flex justify-content-between">
                <div><button className="btn btn-secondary" onClick={onClickContinue}>Continue Shopping</button></div>
                <p className="fw-bold fs-2">Subtotal ({itemCount} items):   {total.toFixed(2)}</p>

            </div>
        </div>
     );



}

export default Cart
