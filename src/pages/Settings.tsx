//Settings page

import Display from '../components/Display'
import Button from '../components/Button'
import DropDown from '../components/DropDown'
import { Link } from 'react-router-dom'

const Settings = () => {

    const buttonStyle: string = "bg-button-colour text-black py-2 px-4 rounded-full w-32 m-3";
    const displayStyle: string = "font-custom";

    const difficultySettings: string[] = ["Easy", "Medium", "Hard"];
    const numberOfQuestions: string[] = ['5', '10', '15', '20'];

    return (
        <div className='bg-gradient-to-b from-home-background to-background-gradient min-h-screen flex flex-col items-center justify-center text-white'>
            <section className=''>
                <Display question={"Subject: Capitals"} classes={displayStyle}/>
            </section>
        
            <section className=''>
                <DropDown label="difficulty"options={difficultySettings} onSelect={()=>{}} classes='' />
            </section>
            <section className=''>
                <DropDown label="numberOfQuestions"options={numberOfQuestions}onSelect={()=>{}} classes='' />
                <Link to=""> <Button label={"Start"} onClick={()=>{}} classes={buttonStyle} /></Link>

            </section>
            


        </div>
    )    
}

export default Settings;