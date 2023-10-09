import React from 'react'

const Episode = ({ episode }) => {

  return (
    <section>
        <span>{episode.id}</span>
        <h3>{episode.name}</h3>
        <span>{episode.air_date}</span> 
    </section>
  )
}

export default Episode