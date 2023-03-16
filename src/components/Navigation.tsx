import React from 'react'
import classNames from 'classnames'
import { clearWarehousesAction } from '../store/action-creators/warehouses'
import { useAppDispatch } from '../store/hooks'
import { NavigationItem } from '../types/navigation'

interface Props {
  navigation: NavigationItem
  setNavigation: React.Dispatch<React.SetStateAction<NavigationItem>>
}

const Navigation: React.FC<Props> = ({
  navigation,
  setNavigation
}: Props) => {
  const dispatch = useAppDispatch()

  return (
    <nav className='navigation'>
      {Object.values(NavigationItem).map(navItem => (
        <button
          key={navItem}
          className={classNames('navigation__item', {
            'navigation__item--active': navItem === navigation
          })}
          onClick={() => {
            setNavigation(navItem)
            if (navItem !== NavigationItem.warehouseList) {
              dispatch(clearWarehousesAction())
            }
          }}
        >
          {navItem}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
