import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} ></img>
      <h1>{props.user}{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde aspernatur recusandae quasi vel, officia assumenda? Mollitia quia impedit, ipsum perferendis ducimus non excepturi atque, aliquam molestiae eveniet voluptas. Nihil.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
