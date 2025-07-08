function Emoji({ char, name }) {
  return (
    <div className="emoji-item">
      <span className="emoji-char" style={{ fontSize: "2.5rem" }}>{char}</span>
      <div className="emoji-name">{name}</div>
    </div>
  )
}
export default Emoji