import { NavigationItem } from '../types/navigation'

interface Props {
  setNavigation: React.Dispatch<React.SetStateAction<NavigationItem>>
}

const Navigation: React.FC<Props> = ({
  setNavigation
}: Props) => {
  return (
    <nav className='navigation'>
      {Object.values(NavigationItem).map(navItem => {
        return (
          <button
            key={navItem}
            className="navigation__item"
            onClick={() => { setNavigation(navItem) }}
          >
            {navItem}
          </button>
        )
      })}
    </nav>
  )
}

export default Navigation
