import React from 'react'
import LineItem from './LineItem'


const ItemsList = ({items,changeHandle,deleteItem}) => {
  return (
    <ul>
    {items.map((item)=>(
       <LineItem
            item={item}
            key={item.id}
            changeHandle={changeHandle}
            deleteItem={deleteItem}
       />
    ))}
        
    </ul>
  )
}
export default ItemsList