import { useState } from "react";
import mobile from "./images/illustration-woman-online-mobile.svg";
import desktop from "./images/illustration-woman-online-desktop.svg";
import { SingleQuestion } from "./SingleQuestion";
import { questions } from "./questions";

function App() {
  const [quests] = useState(questions);

  return (
    <div className="container">
      <article>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img src={mobile} alt="mobile image" />
        </picture>
      </article>

      <article>
        <h1>FAQ</h1>
        {quests.map((quest, index) => (
          <SingleQuestion
            key={index}
            question={quest.question}
            answer={quest.answer}
          />
        ))}
      </article>
    </div>
  );
}

export default App;
