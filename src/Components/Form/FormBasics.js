import React, {useState} from 'react'

const FormBasics = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [logInDetails, setLogInDetails] = useState([]);
    //console.log(email,password);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password){
            const newDetails = {id: new Date().getTime().toString(),email:email,password:password};
            setLogInDetails([...logInDetails,newDetails]);
            setEmail('');
            setPassword('');
            console.log(logInDetails);
        } else {
            alert("Please fill the data");
        }
        
    }


    return (
        <>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='text' name="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                     autoComplete="off" />
                </div>
                <button type='submit'>LogIn</button>
            </form>
            <div>
                {
                    logInDetails.map((details) => {
                        return(
                            <div key={details.id}>
                                <p>Username: {details.email}</p>
                                <p>Pass: {details.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FormBasics
