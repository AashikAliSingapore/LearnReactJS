import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,changeHandle,deleteItem}) => {
  return (
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
  )
}
export default LineItem
