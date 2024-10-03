//Home page
//Stretch goal, fix the colour line at the right of the image. 
// Fix the logo at the end of the image. 
//strech goal jpg for logo

import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    const buttonContainerStyle: string = "absolute bottom-[15%] left-1/2 transform -translate-x-1/2";
    const buttonStyle: string = "bg-button-colour text-black py-4 px-8 rounded-full w-64 font-extrabold";
    
    return (
    <>
      <div className="min-h-screen bg-contain bg-center bg-no-repeat bg-home-background bg-[url('/src/assets/gamelogo-removebg-preview.png')]">
        <div className={buttonContainerStyle}>
          <Link to="/quiztype"> <Button label={"Start"} onClick={()=>{}} classes={buttonStyle} /></Link>
        </div>
      </div>
     
      </>
    );
  };

export default Home;
  