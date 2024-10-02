//Home page
//Stretch goal, fix the colour line at the right of the image. 
// Fix the logo at the end of the image. 

import Button from '../components/Button'

const Home = () => {
    const buttonContainerStyle: string = "absolute bottom-[15%] left-1/2 transform -translate-x-1/2";
    const buttonStyle: string = "bg-button-colour text-black py-2 px-4 rounded-full w-32";
    
    return (
    <>
      <div className="min-h-screen bg-contain bg-center bg-no-repeat bg-home-background bg-[url('/src/assets/gamelogo.jpg')]">
        <div className={buttonContainerStyle}><a href="/quiztype"> <Button label={"Start"} onClick={()=>{}} classes={buttonStyle} /></a>
            
        </div>
      </div>
     
      </>
    );
  };

export default Home;
  