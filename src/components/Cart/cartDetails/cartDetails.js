import React,{useContext, useState} from "react";
import Backdrop from "../../UI/backdrop/backdrop.js";
import classes from './cartDetails.module.css'
import {DeleteTwoTone } from '@ant-design/icons'
import CardContext from "../../../store/card-context";
import Meal from "../../meals/Meal/meal";
import Confirm from "../../UI/confirm/confirm";
const Cartdetails = () => {

    const ctx = useContext(CardContext)
    const [showConfirm,setshowConfirm] = useState(false)

    const showConfirmHandler = () => {
        setshowConfirm(true)
    }

    const cancelHandler = (e) => {
        e.stopPropagation()
        setshowConfirm(false)
    }

    const okHandler = () => {
        //ctx.clearCart()
        ctx.cartDispatch({type:'clearCart'})
    }
    return (
        <Backdrop>

            {showConfirm && <Confirm
                onCancel={cancelHandler}
                onOk={okHandler}
                confirmText={'确认清空购物车吗？'}
            ></Confirm>}


            <div
             className={classes.cartDetails}
             onClick={e => e.stopPropagation()}            
            >
                <header className={classes.header}>
                    <h2 className={classes.title}>餐品详情</h2>
                    <div 
                    onClick={showConfirmHandler}
                    className={classes.clear}>
                        <DeleteTwoTone />
                        <span>清空购物车</span>
                    </div>
                </header>

            <div className={classes.mealsList}>
                {ctx.items.map(item => 
                    <Meal  noDesc key={item.id} meal={item}></Meal>)}

            </div>
            </div>
        </Backdrop>
    )
}
export default Cartdetails