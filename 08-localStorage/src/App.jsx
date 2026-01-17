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
