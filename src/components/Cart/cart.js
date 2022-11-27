import React,{useContext, useState} from "react";
import classes from '../Cart/cart.module.css'
import {AccountBookFilled} from '@ant-design/icons'
import CardContext from "../../store/card-context";
import Cartdetails from "./cartDetails/cartDetails";
import Checkout from "./Checkout/checkout";

const Cart = () => {

    const ctx = useContext(CardContext)
    const bool = ctx.totalAmount

    const [showDetails,setShowdetails] = useState(false)
    const [showCheckout,setShowCheckout] = useState(false)
    const toggleDetailshandler = () => {
        if(ctx.totalAmount === 0) {
            setShowdetails(false)
            return;
        }
        setShowdetails(prevState => !prevState)
    }

    const showCheckouthandler = () => {
        if(bool === 0) return ;
        setShowCheckout(true)
    }

    const hideCheckoutHandler = () => {
        setShowCheckout(false)
    }
    return(
        <div className={classes.cart}
             onClick={toggleDetailshandler} >
            {showCheckout && <Checkout onhide={hideCheckoutHandler}></Checkout>}
            {showDetails && <Cartdetails></Cartdetails>}
            <div className={classes.icon}>
            <AccountBookFilled /> 
            {bool === 0
            ? <></>
            : <span className={classes.TotalAmount}>{bool}</span> 
            }
            </div>
            {bool === 0 
            ? <p className={classes.noMeal}>未选购商品</p>
            : <p className={classes.price}>{ctx.totalPrice}</p>
            }
            
            <button 
            onClick={showCheckouthandler}
            className={`${classes.button} ${bool === 0 
            ? classes.disabled
            : ''}`
            }
            >去结算</button>
        </div>
    )




}


export default Cart