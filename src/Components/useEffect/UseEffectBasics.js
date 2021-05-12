import React, {useState,useEffect} from 'react'

const UseEffectBasics = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {

        document.title = count >= 1 ? `Chats ${count}` : `chats`;
        console.log('UseEffect called');
    })
    console.log("rendered");
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default UseEffectBasics
