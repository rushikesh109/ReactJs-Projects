// import React, { useState } from 'react'


// const App = () => {

//   const [name, setName] = useState({user: "rushi", age:30})
// console.log(name);
//   const change = () => {
//     console.log(name);
    
//      setName({
//       user:"manages",
//       age:30
//      })

//      console.log(setName);
     
//   }
//   return (
//     <div>
//       <h1>{name.user}, {name.age}</h1>
//       <button onClick={change}>Click</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);
  const btnClicked = () => {
   setNum(prev => (prev + 1))
   console.log(setNum);
   setNum(prev => (prev + 1))
   console.log(setNum);
   setNum(prev => (prev + 1))
  console.log(setNum);

  }
  
  return (
    <div>
  <h1>{num}</h1>    
  <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
