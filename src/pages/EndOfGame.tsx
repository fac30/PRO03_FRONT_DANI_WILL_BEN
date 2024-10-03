//EndOfGame.tsx
import Display from '../components/Display';
import Button from '../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EndOfGame = () => {
    const location = useLocation();
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    
    const buttonContainerStyle: string = "absolute bottom-[15%] left-1/2 transform -translate-x-1/2";
    const buttonStyle: string = "bg-button-colour text-black py-4 px-8 rounded-full w-64 font-extrabold";

    // Set the score and number of questions from location state on component mount
    useEffect(() => {
        if (location.state) {
            setPlayerScore(location.state.score || 0);
            setNumber(location.state.totalQuestions || 0);
        }
    }, [location.state]);

    return (
        <div className='bg-gradient-to-b from-home-background to-background-gradient min-h-screen flex flex-col items-center justify-center text-white'>
            <section>
                <Display score={playerScore} numberOfQuestions={number} />
            </section>
            <section className={buttonContainerStyle}>
                <Link to="/quiztype"> 
                    <Button label={"Play again"} onClick={() => {}} classes={buttonStyle} />
                </Link>
            </section>
        </div>
    );
}

export default EndOfGame;

