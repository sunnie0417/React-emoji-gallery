import EmojiGallery from "./components/EmojiGallery"
import Emoji from "./components/Emoji"
import emojiData from "./assets/emojiData";

function App() {
  return (
    <div>
      <h1>Emoji Gallery</h1>
      <EmojiGallery>
        {emojiData.map((emoji, idx) => (
          <Emoji key={idx} char={emoji.char} name={emoji.name} />
        ))}
      </EmojiGallery>
    </div>
  )
}
export default App