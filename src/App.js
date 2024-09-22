import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
function App() {
//Test Data
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
    item: "Understand ReactJS "
   } ,
   {id:2,
    checked:false,
    item: "Workshop React Codes"
   },
   {id:3,
    checked:true,
    item: "Practice Repeately to get success"
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
    <div>
        <Header title="MyFirstReactApp"/>
        <Content items={items}
        changeHandle={changeHandle}
        deleteItem={deleteItem}
        />
        <Footer length={items.length}/>
    </div>
  );
}

export default App;
