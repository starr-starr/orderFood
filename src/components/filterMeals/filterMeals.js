import React, { useEffect, useState } from 'react';
import {SearchOutlined } from '@ant-design/icons'
import classes from '../filterMeals/filterMeals.module.css'
const Filtermeals = (props) => {
    
    const [keyWord,setkeyWord] = useState('')


    useEffect( () => {
        const timer = setTimeout( () => {
            props.onFilter(keyWord)
        },1000)

        return () => {
            clearTimeout(timer)
        }

    },[keyWord])

    const inputChangehandler = e => {
        //console.log('e.target.value', e.target.value);
      setkeyWord(e.target.value.trim());
       
     } 


    return (
        <div className={classes.filterMeals}>
            <div className={classes.inputOuter}>
                <input 
                value={keyWord}
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