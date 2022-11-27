import React from 'react';
import Counter from '../../UI/counter/counter';
import classes from './meal.module.css'
const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.imgBox}>
                <img src={props.meal.img} alt='汉堡'></img>
            </div>
            <div className={classes.descBox}>
                <h2 className={classes.title}>{props.meal.title}</h2>
                {props.meal.noDesc 
                ? <></>
                : <p className={classes.dec}>{props.meal.desc}</p>}
                <div className={classes.priceWrap}>
                    <span className={classes.price}>{props.meal.price}</span>
                    <Counter meal={props.meal}></Counter>
                </div>
            </div>
        </div>
    )
}
export default Meal