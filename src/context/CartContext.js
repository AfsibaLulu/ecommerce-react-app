import { createContext } from "react";

const InitialCartContext={
    cart : [],
    addToCart : ()=>{},
    increaseQuantity : ()=>{},
    decreaseQuantity : ()=>{},
    removeFromCart : ()=>{}

};
const CartContext= createContext(InitialCartContext);

export default CartContext;
