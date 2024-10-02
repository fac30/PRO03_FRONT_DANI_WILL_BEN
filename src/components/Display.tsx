import React from "react";

interface DisplayProps {
  heading?: string;
  question?: string;
  score?: number;
  numberOfQuestions?: number;
  classes?: string;
}

const Display: React.FC<DisplayProps> = ({
  heading,
  question,
  score,
  numberOfQuestions,
  classes,
}) => {
  return (
    <div>
      {heading && <h1 className={classes}>{heading}</h1>}
      {question && <div className={classes}>{question}</div>}
      {score !== undefined && numberOfQuestions !== undefined && (
        <div className={classes}>
          You got {score} / {numberOfQuestions} questions correct!
        </div>
      )}
    </div>
  );
};

export default Display;
