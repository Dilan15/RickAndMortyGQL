import React from 'react'
import '../styles/CardCharacter.css'

const Character = ({ character }) => {
  return (
    <section className='card'>
      <div>
        <img className='card-image' src={character.image} alt={character.name} />
      </div>
      <div style={{ marginTop: '15px', marginLeft: '7px' }}>
        <h3>{character.name}</h3>
        <div style={{ marginTop: '10px'}}>
          <span 
          style={{borderRadius:'50px', width:'75px', display:'block', textAlign:'center'}}
            className={character.status === 'Alive'
            ? 'green'
            : 'red'
          }
          >
            {character.status}
            </span>
        </div>
      </div>
    </section>
  )
}

export default Character