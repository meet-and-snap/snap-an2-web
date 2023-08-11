import React,{useState} from "react"




export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setLname] = useState('');

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="form-container"> 
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firsName">First Name</label>
            <input value={fname} onChange={(e) => setfname(e.target.value)} type="text"/>
            <label htmlFor="lastName">Last Name</label>
            <input value={lname} onChange={(e) => setLname(e.target.value)} type="text"/>
            <label htmlFor="email" >Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} id="email"  type="email" placeholder="Email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} id="password" type="password"placeholder="*******"/>
            <button  >Register</button>
            <p>Register here </p>
        <button onclick={() => props.onFormSwitch('login')} >Sign in</button>
        </form>

        </div>
    )
}