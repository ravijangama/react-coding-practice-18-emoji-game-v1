/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], topScore: 0, isResult: false}

  scoreToZero = () => {
    this.setState({
      clickedEmojisList: [],
      isResult: false,
    })
  }

  finalTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isResult: true})
  }

  increaseScore = emojiId => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(emojiId)
    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finalTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.finalTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, emojiId],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {clickedEmojisList, topScore, isResult} = this.state
    const score = clickedEmojisList.length
    const shuffledEmojisList = this.shuffledEmojisList()
    const jsxElement = (
      <div className="emoji-app-container">
        <NavBar score={score} topScore={topScore} displayScore={isResult} />
        <div className="emojis-bg-container">
          <ul className="emojis-ul-container">
            {!isResult &&
              shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  clickEmoji={this.increaseScore}
                />
              ))}
            {isResult && (
              <WinOrLoseCard score={score} resetScore={this.scoreToZero} />
            )}
          </ul>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default EmojiGame
