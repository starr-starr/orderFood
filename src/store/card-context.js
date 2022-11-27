import React from 'react'

const CardContext = React.createContext({
    items : [],
    totalAmount : 0,
    totalPrice : 0,
    addItem : () => {},
    removeItem : () => {},
    clearCart :  () => {}
})

export default CardContext