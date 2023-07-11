import React from 'react'

function Toyorders(props) {
  return (
    <div className='order'>
      <h1>{props.toys.name}</h1>
      <ul>
        {
            props.toys.order.map((x)=>{
             return <li>{x}</li>
            })
        }
      </ul>
      <h2>Cost: ${props.toys.cost}</h2>
      
    </div>
  )
}

export default Toyorders
