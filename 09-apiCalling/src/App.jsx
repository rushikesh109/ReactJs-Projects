import axios from "axios"
import { useState } from "react"

const App = () => {

// ----------------------- USING FETCH METHOD---------------------------------
//  async function apiReq () {
//     const data =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data);
//   }

// const apiReq = async() => {
//   const data = await fetch('https://jsonplaceholder.typicode.com/todos/')

//   const js = await data.json()
//   console.log(js);
  
// }



// ----------------------- USING AXIOS METHOD---------------------------------

// const apiReq  =  async() => {
//  const response =  await axios.get('https://jsonplaceholder.typicode.com/todos/users')
// console.log(response.data); 
// }

const [data , setData] = useState([])

const apiReq = async() => {
  const response = await axios.get('https://picsum.photos/v2/list')
 setData(response.data)
  
}
  return (
    <div>
      <button onClick={apiReq}>GetData</button>
      <div>
        {data.map(function(elem, idx) {
          return <h3>Hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
