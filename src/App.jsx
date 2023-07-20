import React from 'react'
import Graph from './components/graph/Graph'
import MainCard from './components/mainCard/MainCard'
import Navbar from './components/navbar/Navbar'
import BottomSection from './components/bottomSection/BottomSection'

const App = () => {
  return (
    <div>
      <MainCard/>
      <Graph/>
      <BottomSection/>
      <Navbar/>
    </div>
  )
}

export default App