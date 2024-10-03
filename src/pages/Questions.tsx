//Questions page

import Display from '../components/Display'
import Button from '../components/Button'
import { useState } from 'react'

const Questions = () => {
    //const [questions, setQuestion] = useState<string>('')
    //const [options, setOptions] = useState<([]);
    //const [counter, setCounter] = useState(0);
    //const [maxQuestions, setMaxQuestions] = useState<number>(0);

    const options: string[] = ["Country One", "Country Two", "Country Three", "Country Four"];
    const buttonStyle: string = "bg-button-colour text-black py-2 px-4 rounded-full w-32 m-3";
    const displayStyle: string = "font-custom"
    
    return(
        <div className="">
    <div className = 'bg-gradient-to-b from-home-background to-background-gradient min-h-screen flex flex-col items-center justify-center text-white' ></div>
    <section className=''>
                <Display question={"Questiion one:....."} classes={displayStyle}/>
   </section>
   <section className = 'flex flex-col items-center justify-center'>
     {
        options.map((option,index)=>{
           return  <Button  label={option} key={option + index} onClick={()=>{}} classes={buttonStyle} />
        })
    }
   </section>

   
   </div>

    )
    
}


export default Questions;
