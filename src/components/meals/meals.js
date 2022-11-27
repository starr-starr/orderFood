import React from 'react';
import Meal from './Meal/meal';
import classes from './meals.module.css'
const Meals = (props) => {
    return (
        <div className={classes.meals }>
            {props.mealsData.map(item => <Meal 
            key={item.id}
            meal={item}>
            </Meal>)}
            
        </div>
    )
}
export default Meals