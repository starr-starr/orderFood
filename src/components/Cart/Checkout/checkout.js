import React, { useContext } from "react";
import  ReactDOM  from 'react-dom'
import classes from './checkout.module.css'
import {CloseCircleTwoTone } from "@ant-design/icons"
import CardContext from "../../../store/card-context";
import CheckoutItem from "./checkoutItem/checkoutItem";
import Bar from "./Bar/bar";

const container = document.getElementById('checkout-root')
const Checkout = (props) => {

    const ctx = useContext(CardContext)

    return ReactDOM.createPortal(
        <div className={classes.checkout}>
        <CloseCircleTwoTone onClick={ () => props.onhide()}/>

            <div className={classes.mealsdesc}>
            <header className={classes.header}>
            <h2 className={classes.title}>商品详情</h2>
            </header>

            <div className={classes.meals}>
                {ctx.items.map(item => <CheckoutItem 
                key = {item.id}
                meal={item}></CheckoutItem>)}
            </div>

            <footer className={classes.footer}>
                <p className={classes.totalPrice}>{ctx.totalPrice}</p>
            </footer>
        </div>

        <Bar totalPrice={ctx.totalPrice}></Bar>
        </div>
        ,container)
    
}
export default Checkout