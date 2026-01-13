import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1744659946291-249bd51149a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D",
      color:"royalblue",
      intro: "",
      tag: "UnderBanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1734218353685-d74107e78896?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"orange",
      intro: "",
      tag: "Satisfied",
    },
      {
      img: "https://images.unsplash.com/photo-1646498263941-877307175fff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"lightpink",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1706727288970-b3378fe22298?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"lightsalmon",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669951581900-76d352a9ba56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
      color:"teal",
      intro: "",
      tag: "Underserved",
    },
  ]
  return (
    <div>
      <Section1 users={users}  />
      <Section2 />
    </div>
  )
}

export default App
