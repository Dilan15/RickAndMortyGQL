import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Episode from './Episode'

const Episodes = () => {
  
    const episodesQuery = gql`
    {
        episodes {
            results {
                id
                episode
                air_date
            }
        }   
    }
`

const { loading, error, data } = useQuery(episodesQuery)
  
    return (
    <section style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h2 style={{color: 'rgb(88, 79, 79)'}}>Episodios de la temporada 1</h2>
        {loading && (<div className='container-loader'><span className='loader'></span></div>)}
        {error && <p>Error:</p>}
        {data && 
            data.episodes.results.map(episode => (
                <Episode key={episode.id} episode={episode} / >           
            ))
        }
    </section>
  )
}

export default Episodes