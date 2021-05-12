import React,{useState} from 'react'

const UseStateBasics = () => {
    // console.log(useState());
    // console.log(useState("hello")[1])
    const [name,setName] = useState('Sri Ram');
    console.log("name:",name);
    const handleName = () => {
        name === 'Sri Ram' ? setName("SiyaRam"): setName("Sri Ram");
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <button onClick={handleName}>Toggle</button>
        </div>
    )
}

export default UseStateBasics
