import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Place from './Place'

const Places = () => {
  
    const placesQuery = gql`
    {
        locations {
            results {
                id
                name
            }
        }   
    }
`
    const { loading, error, data } = useQuery(placesQuery)
  
    return (
        <section style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h2 style={{color: 'rgb(88, 79, 79)'}}>Lugares de la temporada 1</h2>
        { loading && (<div className='container-loader'><span className='loader'></span></div>)}
        { error && (<p>Error: </p>) }
        { data &&
            data.locations.results.map(location => (
                <Place key={location.id} location={location} />
            ))
            
        }
    </section>
  )
}

export default Places