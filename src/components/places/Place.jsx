import React from 'react'

const Place = ({ location }) => {
  return (
    <section style={{display:'flex', paddingTop:'10px'}}>
    <span>{location.id}</span> -
    <h3 style={{ paddingLeft:'7px'}}>{location.name}</h3> 
</section>
  )
}

export default Place