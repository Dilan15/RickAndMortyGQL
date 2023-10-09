import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Episode from './Episode'

const Episodes = () => {
  
    const episodesQuery = gql`
    {
        episodes {
            results {
                id
                episodes
                air_date
            }
        }   
    }
`

const { loading, error, data } = useQuery(episodesQuery)
  
    return (
    <section>
        {loading && <p>Loading</p>}
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