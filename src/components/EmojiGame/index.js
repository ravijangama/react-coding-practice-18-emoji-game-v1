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
import './index.css'

class EmojiGame extends Component {
  state = {scoreCount: 0, prevId: Math.floor(Math.random() * 10), isWon: false}

  increaseScore = emojiId => {
    const {scoreCount, prevId, isWon} = this.state
    if (prevId !== emojiId) {
      if (scoreCount < 12) {
        this.setState(prevState => ({
          scoreCount: prevState.scoreCount + 1,
          prevId: emojiId,
        }))
      }
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {prevId} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    const jsxElement = (
      <div className="emoji-app-container">
        <NavBar />
        <div className="emojis-bg-container">
          <ul className="emojis-ul-container">
            {shuffledEmojisList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                clickEmoji={this.increaseScore}
              />
            ))}
          </ul>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default EmojiGame
