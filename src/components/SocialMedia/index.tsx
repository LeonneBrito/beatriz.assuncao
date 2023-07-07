import { InstagramLogo } from 'phosphor-react'

const SocialMedia = () => {
  return (
    <div className="flex justify-center py-6">
      <a
        className="flex items-center justify-center p-4 transition duration-200 rounded-full hover:bg-white hover:bg-opacity-20"
        href="https://www.instagram.com/beatrizass"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramLogo color="white" size={24} />
      </a>
    </div>
  )
}

export default SocialMedia
