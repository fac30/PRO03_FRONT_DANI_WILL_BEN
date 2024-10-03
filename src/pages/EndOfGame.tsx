import React from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const EndOfGame: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="end-game-container min-h-screen flex flex-col items-center justify-center text-white">
      <Display
        heading="Quiz Complete!"
        score={score}
        numberOfQuestions={totalQuestions}
        classes="font-custom"
      />
      <Button
        label="Restart Quiz"
        onClick={handleRestart}
        classes="bg-button-colour text-black py-2 px-4 rounded-full w-32 m-3"
      />
    </div>
  );
};

export default EndOfGame;

