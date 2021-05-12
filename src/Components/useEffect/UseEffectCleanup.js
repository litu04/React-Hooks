import React, {useState,useEffect} from 'react'

const UseEffectCleanup = () => {
    const [screenSize,setScreenSize] = useState(window.screen.width);

    const changeWindowSize = () => {
        console.log(window.innerWidth);
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        console.log("useEffect1 called");
        window.addEventListener('resize',changeWindowSize);

        return () => {
            console.log("clean up called");
            window.removeEventListener('resize',changeWindowSize);
        }
    })
    return (
        <div>
            <h2>Window screen size is:</h2>
            <p><b>{screenSize}</b></p>
        </div>
    )
}

export default UseEffectCleanup;
