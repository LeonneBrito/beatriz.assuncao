import MenuItem from './MenuItem'

import { menuItems } from '../../lib/menu'

const Menu = () => {
  return (
    <ul className="list-none flex flex-col gap-4 py-6">
      {menuItems.map((item, index) => (
        <MenuItem key={index} text={item} link={item.link} />
      ))}
    </ul>
  )
}

export default Menu
