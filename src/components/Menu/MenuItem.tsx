import { useState } from 'react'

interface MenuItem {
  text: {
    default: string
    hover: string
  }
  link: string
}
const MenuItem = ({ text, link }: MenuItem) => {
  const [hovered, setHovered] = useState(false)

  const handleHover = () => {
    setHovered((hovered) => !hovered)
  }

  return (
    <li>
      <a
        className="flex items-center justify-center text-center py-4 px-6 rounded-lg bg-white bg-opacity-5 border border-solid border-white border-opacity-50 backdrop-blur-sm no-underline transition duration-200 hover:bg-black hover:bg-opacity-[.02] hover:border-[1.5px] hover:border-white"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {hovered ? text.hover : text.default}
      </a>
    </li>
  )
}

export default MenuItem
