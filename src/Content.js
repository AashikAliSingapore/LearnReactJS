import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

    const [name,setName] = useState("Glow")
    function handleNameChange()
    {
     const namechange = ["Glow","Earn","Loss"];
     const randomnum = Math.floor(Math.random()*3);
     return setName(namechange[randomnum]);
    }
  
    
    const [count,setCount] = useState(1)

    function incrementFunction()
    {
        setCount((prevcount) =>{return prevcount+1})
    }

    function decrementFunction()
    {
        setCount((prevcount) => {return prevcount-1})
    }

   const [items,setItems] = useState([
       {id:1,
        checked:true,
        item: "Practice Coding I "
       } ,
       {id:2,
        checked:false,
        item: "Practice Coding II "
       },
       {id:3,
        checked:true,
        item: "Practice Coding III"
       }

    ])

    const numbers = [-2,-1,2,3,4]
    const itemss = numbers.filter(n =>n>0).map((n) =>({numbers:n}))
    console.log(itemss)

    const changeHandle = (id) => 
    {
       const listItems = items.map((item) =>item.id===id ? {...item,checked:!item.checked} : item)
       setItems(listItems)
       localStorage.setItem("tod_list",JSON.stringify(listItems))
    }

    const deleteItem = (id) => {
        const deleteItems = items.filter((item) => item.id!==id)
        setItems(deleteItems)
        localStorage.setItem("todo_list",JSON.stringify(deleteItems))
    }

  return (
    <main>
                <ul>
                    {items.map((item)=>(
                        <li className='item' key={item.id}>
                            <input 
                            type="checkbox" 
                            onChange={() =>{changeHandle(item.id)}}
                            checked={item.checked}
                            />
                            <label>{item.item}</label>
                           
                            <FaTrashAlt role='button' tabIndex='0' onClick={()=>{deleteItem(item.id)}}>Delete</FaTrashAlt>
                        </li>
                    ))}
                        
                </ul>
        <p>Lets {name} Money</p>
        <button onClick={handleNameChange}>Subscribe</button>
        <button onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>
    </main>
       
  )
}

export default Content