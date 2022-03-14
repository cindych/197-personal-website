import React from 'react'
import Intro from './components/Intro'
import Posts from './components/Posts'

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Intro />
    <Posts />
  </div>
)

export default App
