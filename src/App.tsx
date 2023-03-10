import React from 'react'
import Navigation from './components/Navigation'
import Track from './components/Track'
import './styles/styles.scss'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Navigation />
      <Track />
    </div>
  )
}

export default App
