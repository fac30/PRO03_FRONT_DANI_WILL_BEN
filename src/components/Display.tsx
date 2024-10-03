import React from "react";

interface DisplayProps {
  heading?: string;
  question?: string;
  message?: string;
  //endGameMessage?: string,
  score?: number;
  numberOfQuestions?: number;
  classes?: string;
}

const Display: React.FC<DisplayProps> = ({
  heading,
  question,
  message,
  score,
  numberOfQuestions,
  classes,
}) => {
  return (
    <div>
      {heading && <h1 className={classes}>{heading}</h1>}
      {question && <p className={classes}>{question}</p>}
      {message && <p className={classes}>{message}</p>}
      {score !== undefined && numberOfQuestions !== undefined && (
        <p className={classes}>
          {`You got ${score} / ${numberOfQuestions} questions correct!`}
        </p>
      )}
    </div>
  );
};

export default Display;
