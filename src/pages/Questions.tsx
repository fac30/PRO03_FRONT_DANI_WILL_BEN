import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Display from '../components/Display';
import Button from '../components/Button';

interface Question {
  questionId: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuizData = localStorage.getItem('quizData');
    if (storedQuizData) {
      setQuestions(JSON.parse(storedQuizData).questions);
    } else {
      navigate('/settings');
    }
  }, [navigate]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (questions[currentQuestionIndex].correctAnswer === answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      navigate('/results', { state: { score, totalQuestions: questions.length } });
    }
  };

  if (questions.length === 0) {
    return <Display heading="Loading..." />;
  }

  const buttonStyle: string = 'text-black py-2 px-4 rounded-full w-32 m-3';
  const displayStyle: string = 'font-custom';

  return (
    <div className="bg-gradient-to-b from-home-background to-background-gradient min-h-screen flex flex-col items-center justify-center text-white">
      <section className="mb-6">
        <Display question={`Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].questionText}`} classes={displayStyle} />
      </section>
      <section className="flex flex-col items-center mb-6">
        {questions[currentQuestionIndex].options.map((option) => (
          <Button
            key={option}
            label={option}
            onClick={() => handleAnswerClick(option)}
            classes={buttonStyle}
            status={
              selectedAnswer
                ? option === questions[currentQuestionIndex].correctAnswer
                  ? 'correct'
                  : selectedAnswer === option
                  ? 'incorrect'
                  : 'default'
                : 'default'
            }
            disabled={!!selectedAnswer} // Disable buttons after selecting an answer
          />
        ))}
      </section>

      <section className="mb-6">
        {selectedAnswer && (
          <div className="feedback text-lg">
            {selectedAnswer === questions[currentQuestionIndex].correctAnswer
              ? 'Correct!'
              : `Incorrect! The correct answer was ${questions[currentQuestionIndex].correctAnswer}.`}
          </div>
        )}
      </section>

      {selectedAnswer && (
        <Button
          label="Next"
          onClick={handleNextQuestion}
          classes={buttonStyle}
        />
      )}
    </div>
  );
};

export default Questions;

