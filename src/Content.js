import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items,changeHandle,deleteItem}) => {

  return (
    <main>
        {(items.length)?
        <ul>
        {items.map((item)=>(
            <li className='item' key={item.id}>
                <input 
                type="checkbox" 
                onChange={() =>{changeHandle(item.id)}}
                checked={item.checked}
                />
                <label 
                style={(item.checked)?{textDecoration:'line-through'}:null}
                onDoubleClick={() =>{changeHandle(item.id)}}>{item.item}</label>
               
                <FaTrashAlt role='button' tabIndex='0' onClick={()=>{deleteItem(item.id)}}>Delete</FaTrashAlt>
            </li>
        ))}
            
    </ul>
        :
        <p> Your Cart is Empty</p>
        }
                
        {/* <p>Lets {name} Money</p>
        <button onClick={handleNameChange}>Subscribe</button>
        <button onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button> */}
    </main>
       
  )
}

export default Content