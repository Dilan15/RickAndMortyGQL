import React from 'react'

const Episode = ({ episode }) => {

  return (
    <section style={{display:'flex', paddingTop:'10px'}}>
        <span>{episode.id}</span> -
        <h3>{episode.name}</h3>
        <span style={{ paddingLeft:'7px'}}>{episode.air_date}</span> 
    </section>
  )
}

export default Episode