import videoBg from '../videos/background.mp4'
import { useState, useEffect } from 'react';
import '../css/JHportfolio.css'



function JHportfolio() {
    const [Title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord =`Welcome JuHyeok's Portfolio!`;

    useEffect(() => {
    const typingInterval = setInterval(() => {
    setTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
            setCount(0);
            setTitle('');
        }

        return result;
    });
    }, 300);

    return () => {
        clearInterval(typingInterval);
    };
    });



    return(
        <div>
            <video src={videoBg} autoPlay loop muted style={{opacity:'0.8',width:'100%', marginTop:'5%', borderRadius:'5%'}}/>
            <div><h1 className="JHportpolio-title">{Title}</h1></div>
        </div>

)
}


export default JHportfolio;