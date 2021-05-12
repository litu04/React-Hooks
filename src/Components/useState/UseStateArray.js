import React,{useState} from 'react';
import {data} from '../../data';

const UseStateArray = () => {
    const [personDetails,setPersonDetails] = useState(data);

    const clearDetails = () => {
        setPersonDetails([]);
        console.log("data:",personDetails);
    }
    return (
        <div>
            {
                personDetails.map((person) => {
                    console.log("person found",person);
                    const {name,age,marks,id} = person;
                    return (
                        <div key={id}>
                            <h2>Name: {name}</h2>
                            <span>
                                <p>Age: {age}</p>
                                <p>Marks: {marks}</p>
                            </span>
                        </div>
                    )
                })
            }
            <button onClick={clearDetails}>clear</button>
        </div>
    )
}

export default UseStateArray
