import { clearWarehousesAction } from '../store/action-creators/warehouses'
import { useAppDispatch } from '../store/hooks'
import { NavigationItem } from '../types/navigation'

interface Props {
  setNavigation: React.Dispatch<React.SetStateAction<NavigationItem>>
}

const Navigation: React.FC<Props> = ({
  setNavigation
}: Props) => {
  const dispatch = useAppDispatch()

  return (
    <nav className='navigation'>
      {Object.values(NavigationItem).map(navItem => (
        <button
          key={navItem}
          className="navigation__item"
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
