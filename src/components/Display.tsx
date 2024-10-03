import React from "react";

interface DisplayProps {
  heading?: string;
  question?: string;
  message?: string;
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
      {question && <div className={classes}>{question}</div>}
      {message && <p className={classes}>{message}</p>}
      {score !== undefined && numberOfQuestions !== undefined && (
        <div className={classes}>
          You got {score} / {numberOfQuestions} questions correct!
        </div>
      )}
    </div>
  );
};

export default Display;
