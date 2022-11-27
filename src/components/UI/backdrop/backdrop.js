import React from 'react'
import  ReactDOM  from 'react-dom'
import classes from './backdrop.module.css'

const container = document.getElementById('backdrop-root')

const Backdrop = (props) => {

    return (
        ReactDOM.createPortal(
            <div className={ `${classes.backdrop} ${props.className}`}>
         {props.children}
        </div>,container)
        )
    
}

export default Backdrop