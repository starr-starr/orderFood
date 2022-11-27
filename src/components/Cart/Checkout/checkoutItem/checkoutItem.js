import React from 'react'
import classes from './checkoutItem.module.css'
import Counter from '../../../UI/counter/counter'
const CheckoutItem = (props) => {
    return(
        <div className={classes.checkoutItem}>
            <div className={classes.mealImg}>
                <img src={props.meal.img} alt={props.meal.title}></img>
            </div>
            <div className={classes.mealsDesc}>
                <h2 >{props.meal.title}</h2>
                <div className={classes.priceOuter}>
                    <div><Counter meal={props.meal}></Counter></div>
                     <div className={classes.price}>{props.meal.price * props.meal.amount}</div>
                </div>
            </div>
        </div>
    )
}
export default CheckoutItem