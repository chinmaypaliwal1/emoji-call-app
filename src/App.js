import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState({});
  const array = [
    { emoji: "❤️", text: "Heart" },
    { emoji: "😄", text: "Smile" },
    { emoji: "😎", text: "Sunglass smile" },
    { emoji: "😞", text: "Sad" },
    { emoji: "🥶", text: "Cold" },
    { emoji: "😑", text: "Confused" },
    { emoji: "😂", text: "Joy" },
    { emoji: "🤯", text: "Mind Burst" },
    { emoji: "😇", text: "Kind" },
    { emoji: "👊", text: "Punch" },
    { emoji: "💀", text: "Skull" },
    { emoji: "🥷", text: "The Ninja" },
    { emoji: "🤩", text: "The star eye" },
    { emoji: "😋", text: "toung out smile" },
  ];
  const handleClick = (emoji) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [emoji]: !prevState[emoji],
    }));
  };
  return (
    <div className="App">
      <div className="emoji-container">
        {array.map(({ emoji }, index) => (
          <h2 key={index} onClick={() => handleClick(emoji)}>
            {emoji}
          </h2>
        ))}
      </div>
      <div>
        {array.map(
          ({ emoji, text }) =>
            isVisible[emoji] && (
              <p key={emoji}>
                {emoji} {text}
              </p>
            )
        )}
      </div>
    </div>
  );
}
