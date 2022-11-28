import React,{useContext} from 'react';
import classes from '../counter/counter.module.css'
import {PlusOutlined,MinusOutlined} from '@ant-design/icons'
import CardContext from '../../../store/card-context';


const Counter = (props) => {
    const ctx = useContext(CardContext)

    const addButtonHandler = () => {
        //ctx.addItem(props.meal)
        ctx.cartDispatch({type:'addItem',meal:props.meal})
    }

    const subButtonHandler = () => {
        //ctx.removeItem(props.meal)
        ctx.cartDispatch({type:'removeItem',meal:props.meal})
    }

    return(
        <div className={classes.counter}>

            {
                (props.meal.amount && props.meal.amount > 0 )
                ? ( <>
                    
                     <button 
                     className={classes.sub}
                     onClick={subButtonHandler}>
                        {<MinusOutlined />}
                     
                     </button> 
                     <span>{props.meal.amount}</span>
                    
                    </>
                    )
                :<></>
            }
            
           
            <button 
            className={classes.add}
            onClick={addButtonHandler}>
                {<PlusOutlined/>}
            </button>
        </div>
    )
}

export default Counter