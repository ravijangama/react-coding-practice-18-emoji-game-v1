// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const clickEmojiBtn = () => {
    clickEmoji(id)
  }
  const jsxElement = (
    <li className="emoji-li-container">
      <button type="button" className="emoji-button" onClick={clickEmojiBtn}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
  return jsxElement
}
export default EmojiCard
