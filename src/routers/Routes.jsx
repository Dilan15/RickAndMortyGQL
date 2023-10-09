import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import ListEpisodes from '../pages/ListEpisodes'
import ListPlaces from '../pages/ListPlaces'

const MyRoutes = () => {
  return (
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/episodes' element={<ListEpisodes />} />
            <Route exact path='/places' element={<ListPlaces />} />
        </Routes>
  )
}

export default MyRoutes