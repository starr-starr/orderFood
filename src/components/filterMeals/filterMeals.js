import React from 'react';
import {SearchOutlined } from '@ant-design/icons'
import classes from '../filterMeals/filterMeals.module.css'
const Filtermeals = (props) => {
    
    const inputChangehandler = e => {
        //console.log('e.target.value', e.target.value);
        const keyWord = e.target.value.trim();
        props.onFilter(keyWord)
     } 


    return (
        <div className={classes.filterMeals}>
            <div className={classes.inputOuter}>
                <input 
                className={classes.searchInput}
                onChange={inputChangehandler}
                type='text' placeholder="请输入关键字"></input>
                <SearchOutlined
                className={classes.searchIcon} />
            </div>
        </div>



    )
}
export default Filtermeals