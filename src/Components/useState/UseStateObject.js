import React,{useState} from 'react'

const UseStateObject = () => {
    const [myObj, setMyObj] = useState({
        name: 'John',
        age: 21,
        marks: 700
    })

    const handleUpdate = () => {
        myObj.name === 'John' ? setMyObj({...myObj,name: 'Mark'}) : setMyObj({...myObj,name: 'John'})
    } 
    return (
        <div>
            <h1>Name: {myObj.name}</h1>
            <p>Age: {myObj.age}</p>
            <span>Marks: {myObj.marks}</span>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default UseStateObject
