import React,{useState} from "react"


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email" >Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} id="email"  type="email" placeholder="Email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} id="password" type="password"placeholder="*******"/>
            <button >Log in</button>
        </form>
        <p>Register here </p><button onClick={() => props.onFormSwitch('register') }>Sign up</button>
        </div>
    ) 
        
    
}