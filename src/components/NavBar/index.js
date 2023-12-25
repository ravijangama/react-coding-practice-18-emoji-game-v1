// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, displayScore} = props
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
      {!displayScore && (
        <div className="score-container">
          <p className="scores-info">Score: {score}</p>
          <p className="scores-info">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
  return jsxElement
}
export default NavBar
