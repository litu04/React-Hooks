import React, {useState,useEffect} from 'react'

const UseEffectDependency = () => {
    const [counter,setCounter] = useState(0);

    useEffect(() => {
        console.log("Use effect1 called");
    },[counter])

    useEffect(() => {
        console.log("Use effect2 called");
    },[])

    console.log("rendered");
    return (
        <div>
            <h2>Count: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Click</button>
        </div>
    )
}

export default UseEffectDependency;
