import { FormEvent, useEffect, useState } from "react";

const SignupForm = ({ creatFunc }: { creatFunc: any }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [un, setUn] = useState("");
    const [pw, setPw] = useState("");
    const checkSubmit = (e: FormEvent) => {
        e.preventDefault();
        name != "" && email != "" && un != "" && pw != "" && creatFunc(name, email, un, pw);
    }
    return (<div className="custom_form">
        <h2>Signup</h2>
        <form name="create_user_form" onSubmit={checkSubmit}>
            <input type="text" name="create_user_form_name" placeholder="Name:"
                onChange={(e) => setName(e.target.value)} value={name} required></input>
            <br></br>
            <input type="email" name="create_user_form_email" placeholder="Email:"
                onChange={(e) => setEmail(e.target.value)} value={email} required></input>
            <br></br>
            <input type="text" name="create_user_form_username" placeholder="username:"
                onChange={(e) => setUn(e.target.value)} value={un} required></input>
            <br></br>
            <input type="password" name="create_user_form_password" placeholder="password:"
                onChange={(e) => setPw(e.target.value)} value={pw} required></input>
            <br></br>
            <button name="create_user_form_create_user" type="submit">Create User</button>
        </form></div>);
};

export default SignupForm;