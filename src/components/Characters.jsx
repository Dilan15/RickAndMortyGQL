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
        <section>
            <h2 style={{ textAlign: 'center', color: 'rgb(88, 79, 79)'}}>Personajes de la temporada 1</h2>
                {loading && (<div className='container-loader'><span className='loader'></span></div>)}
            <div className='grid-character'>
                {error && (<p>Error: </p>)}
                {data &&
                    data.characters.results.map(character => (
                        <Character key={character.id} character={character} />
                    ))

                }
            </div>
        </section>
    )
}

export default Characters