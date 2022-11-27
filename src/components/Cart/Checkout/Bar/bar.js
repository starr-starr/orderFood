import React from 'react'
import classes from './bar.module.css'
const Bar = (props) => {

    return (
        <div className={classes.bar}>
            <div className={classes.price}>{props.totalPrice}</div>
            <button>去支付</button>
        </div>
    )

}

export default Bar