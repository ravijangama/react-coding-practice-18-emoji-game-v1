// Write your code here.
import './index.css'

const NavBar = () => {
  const jsxElement = (
    <nav className="nav-bg-container">
      <div className="emoji-game-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="logo-image-desc">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="scores-info">Score: 0</p>
        <p className="scores-info">Top Score: 0</p>
      </div>
    </nav>
  )
  return jsxElement
}
export default NavBar
