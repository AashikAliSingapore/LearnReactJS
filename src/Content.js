import React from 'react'
import ItemsList from './ItemsList'

const Content = ({items,changeHandle,deleteItem}) => {

  return (
    <main>
        {(items.length)?
        <ItemsList
        items={items}
        changeHandle={changeHandle}
        deleteItem={deleteItem}
        />
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