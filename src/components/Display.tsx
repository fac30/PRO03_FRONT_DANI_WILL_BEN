import React from "react";

interface DisplayProps {
  heading: string;
  question: string;
  score: number;
  classes: string;
}

const Display: React.FC<DisplayProps> = ({
  heading = "",
  question = "",
  score = NaN,
  classes = "",
}) => {
  return (
    <>
      <div>
        {heading && <h1 className={classes}>{heading}</h1>}
        {question && <div className={classes}>{question}</div>}
        {score && <div className={classes}>{score}</div>}
      </div>
    </>
  );
};

export default Display;
