import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const SingleQuestion = ({ question, answer }) => {
  const [isShowing, setIsShowing] = useState(false);

  const handleShowing = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className="article-question">
      <article onClick={handleShowing}>
        <h2 className={`${isShowing && "clicked"}`}>{question}</h2>
        {isShowing ? (
          <FaChevronUp className="icon" />
        ) : (
          <FaChevronDown className="icon" />
        )}
      </article>
      {isShowing && <p>{answer}</p>}
    </div>
  );
};
