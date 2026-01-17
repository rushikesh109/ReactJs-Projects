import React from 'react'

const App = () => {
//  const age = localStorage.getItem("age")
//  const user = localStorage.getItem("user")
//  console.log(age);
//  console.log(user);
 

const user = {
  name: "rushi",
  age:23,
  role: "admin"
}

localStorage.setItem('user', JSON.stringify(user));
// console.log(setItem);
const get = JSON.parse(localStorage.getItem('user', (user)))
console.log(get);

  return (
    <div>
      <h1>app</h1>
    </div>
  )
}

export default App


//localstorge has four main method setItem to add item , getItem to retrive item then removeItem to remove particular thing and last one is clear to clear all..
//and if you want to store the object then user JSON.Stringyfy to store and for retriving or we can say for writing we need to write JSON.parse so it convert string of object cause localstorage store in key-value pair and also it only store in string format 
