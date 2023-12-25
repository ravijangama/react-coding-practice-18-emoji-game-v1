// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, resetScore} = props
  const clickPlayAgain = () => {
    resetScore()
  }
  let resultElement = null
  if (score < 12) {
    resultElement = (
      <div className="result-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="result-image"
        />
        <h1 className="result-heading">You Lose</h1>
        <p className="result-score">Score</p>
        <p className="result">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={clickPlayAgain}
        >
          Play Again
        </button>
      </div>
    )
  } else {
    resultElement = (
      <div className="result-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="result-image"
        />
        <h1 className="result-heading">You Won</h1>
        <p className="result-score">Best Score</p>
        <p className="result">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={clickPlayAgain}
        >
          Play Again
        </button>
      </div>
    )
  }
  return resultElement
}
export default WinOrLoseCard
