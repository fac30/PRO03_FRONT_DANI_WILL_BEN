//Settings page

import Display from '../components/Display'
import Button from '../components/Button'

const Settings = () => {
    const options: string[] = ["Difficulty", "No. of questions", "Start"];
    const buttonStyle: string = "bg-button-colour text-black py-2 px-4 rounded-full w-32 m-3";
    const displayStyle: string = "font-custom"


    return (
        <div className='bg-gradient-to-b from-home-background to-background-gradient min-h-screen flex flex-col items-center justify-center text-white'>
            <section className=''>
                <Display question={"Subject: Capitals"} classes={displayStyle}/>
            </section>
            <section className='flex flex-col items-center justify-center'>
                {
                    options.map((option,index)=>{
                       return  <Button  label={option} key={option + index} onClick={()=>{}} classes={buttonStyle} />
                    })
                }
            </section>
        </div>
    )    
}

export default Settings;