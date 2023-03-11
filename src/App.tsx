import React from 'react'
import Navigation from './components/Navigation'
import Track from './components/Track'
import WarehouseList from './components/WarehouseList'
import { NavigationItem } from './types/navigation'
import './styles/styles.scss'

const App: React.FC = () => {
  const [navigation, setNavigation] = React.useState<NavigationItem>(NavigationItem.checkTTN)

  return (
    <div className='app'>
      <Navigation
        setNavigation={setNavigation}
      />

      {navigation === NavigationItem.checkTTN
        ? <Track />
        : <WarehouseList />
      }
    </div>
  )
}

export default App
