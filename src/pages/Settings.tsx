import { useState } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import { useLocation, useNavigate } from 'react-router-dom';


const Settings = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quizType = location.state?.quiztype || 'Capitals';

  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Medium');
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] = useState<string>('5');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const apiUrl = import.meta.env.BACKEND_HOST;
  const buttonStyle: string = "bg-button-colour text-black py-4 px-8 rounded-full w-64 font-extrabold m-3";
  const displayStyle: string = 'font-custom';

  const difficultySettings: string[] = ['Easy', 'Medium', 'Hard'];
  const numberOfQuestions: string[] = ['5', '10', '15', '20'];

  const handleStartQuiz = async () => {
  setLoading(true);
  setErrorMessage(null);

  try {
    const response = await fetch(
      `${apiUrl}/api/quiz?difficulty=${selectedDifficulty}&type=${quizType}&numberOfQuestions=${parseInt(selectedNumberOfQuestions, 10)}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch quiz data. Please try again.');
    }

    const data = await response.json();

    if (!data.quizId || !data.questions) {
      throw new Error('Invalid quiz data received from the server.');
    }

    localStorage.setItem('quizData', JSON.stringify(data));

    navigate('/questions', {
      state: {
        quizId: data.quizId,
        quizType,
        difficulty: selectedDifficulty,
        numberOfQuestions: parseInt(selectedNumberOfQuestions, 10),
      },
    });
  } catch (error) {
    console.error('Error:', error);
    setErrorMessage((error as string) || 'An unexpected error occurred. Please try again.');  
    } finally {
    setLoading(false);
  }
};
return (
    <div className='bg-gradient-to-b from-home-background to-background-gradient min-h-screen flex flex-col items-center justify-center text-white'>
      <section>
        <Display question={`Subject: ${quizType}`} classes={displayStyle} />
      </section>

      <section>
        <DropDown
          label="Difficulty"
          options={difficultySettings}
          onSelect={(value) => setSelectedDifficulty(value)}
          classes={buttonStyle}
        />
      </section>
      
      <section>
        <DropDown
          label="Number of Questions"
          options={numberOfQuestions}
          onSelect={(value) => setSelectedNumberOfQuestions(value)}
          classes={buttonStyle}
        />
      </section>

      <section>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <Button label={loading ? "Loading..." : "Start"} onClick={handleStartQuiz} classes={buttonStyle} disabled={loading} />
      </section>
    </div>
  );
};

export default Settings;

