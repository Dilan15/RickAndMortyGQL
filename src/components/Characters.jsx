import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Character from './Character'
import '../styles/GridCard.css'
import '../styles/Loader.css'

const Characters = () => {
  
    const charactersQuery = gql`
        {
            characters {
                results {
                    id
                    name
                    image
                    status
                }
            }   
        }
    `
    const { loading, error, data } = useQuery(charactersQuery)
  
    return (
    <section className='grid-character'>
        { loading && (<div className='container-loader'><span className='loader'></span></div>)}
        { error && (<p>Error: </p>) }
        { data &&
            data.characters.results.map(character => (
                <Character key={character.id} character={character} />
            ))
            
        }
    </section>
  ) 
}

export default Characters