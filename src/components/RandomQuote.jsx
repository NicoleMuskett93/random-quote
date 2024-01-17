import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const RandomQuote = (props) => {
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };
  const [quote, setQuote] = useState({
    text: "I have a dream.",
    author: "Martin Luther King",
  });
  loadQuotes();
  return (
    <>
      <div className="container">
        <div className="quote">{quote.text}</div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <FontAwesomeIcon
              icon={faSync}
              onClick={() => {
                random();
              }}
              size="2x"
              className="refresh-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
