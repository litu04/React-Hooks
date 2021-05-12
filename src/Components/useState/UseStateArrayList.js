import React, {useState} from 'react';
import {data} from '../../data';


const UseStateArrayList = () => {
    const[myData,setMyData] = useState(data);

    const removeDetais = (id) => {
        const newData = myData.filter((people) => {
            return people.id !== id
        })
        setMyData(newData);
    }

    const clearAll = () => {
        setMyData([])
    }

    return (
        <div>
            {
                myData.map((person) => {
                    return (
                        <h1 key={person.id}>
                            name: {person.name}
                            Age: {person.age}
                            <button onClick={()=> removeDetais(person.id)}>remove</button>
                        </h1>
                    )
                })
            }
            <button onClick={clearAll}>clear</button>
        </div>
    )
}

export default UseStateArrayList;
