import Menu from './components/Menu'
import Avatar from './components/Avatar'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'

function App() {
  return (
    <div className="w-full max-w-[588px] mt-14 mx-auto px-6">
      <Avatar />
      <Menu />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default App
