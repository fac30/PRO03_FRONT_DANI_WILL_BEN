//End of Game page

import Display from '../components/Display';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const EndOfGame = () => {
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    
    const buttonContainerStyle: string = "absolute bottom-[15%] left-1/2 transform -translate-x-1/2";
    const buttonStyle: string = "bg-button-colour text-black py-4 px-8 rounded-full w-64 font-extrabold";

    return (

       
        <div className = 'bg-gradient-to-b from-home-background to-background-gradient min-h-screen flex flex-col items-center justify-center text-white'>
            <section>
                <Display score={playerScore} numberOfQuestions={number} />
            </section>
            <section className={buttonContainerStyle}>
            <Link to="/quiztype"> <Button label={"Play again"} onClick={()=>{}} classes={buttonStyle} /></Link>
            </section>
      </div>

    )
}

export default EndOfGame;
