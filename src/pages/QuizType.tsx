import Display from '../components/Display';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const QuizType = () => {
  const options: string[] = ['Countries', 'Population', 'Capitals', 'Birth rate'];
  const buttonStyle: string = 'bg-button-colour text-black py-2 px-4 rounded-full w-32 m-3';
  const displayStyle: string = 'font-custom';

  const navigate = useNavigate();

  const handleClick = (quizType: string) => {
    navigate('/settings', { state: { quizType } });
  };

  return (
    <div className="bg-gradient-to-b from-home-background to-background-gradient min-h-screen flex flex-col items-center justify-center text-white">
      <section>
        <Display question="Choose your subject!" classes={displayStyle} />
      </section>
      <section className="flex flex-col items-center justify-center">
        {options.map((option, index) => (
          <Button
            label={option}
            key={option + index}
            onClick={() => handleClick(option)}
            classes={buttonStyle}
          />
        ))}
      </section>
    </div>
  );
};

export default QuizType;

