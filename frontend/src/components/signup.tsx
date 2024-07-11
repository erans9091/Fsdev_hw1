import { FormEvent, FormEventHandler, useEffect, useState } from "react";

const signupForm = ({ creatFunc }: { creatFunc: any }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [un, setUn] = useState("");
    const [pw, setPw] = useState("");
    const checkSubmit = (e: any) => {
        e.preventDefault();
        name != "" && email != "" && un != "" && pw != "" && creatFunc();
    }
    return (<form name="create_user_form" onSubmit={checkSubmit}>
        <input type="text" name="create_user_form_name" placeholder="Name:"
            onChange={(e) => setName(e.target.value)} required></input>
        <input type="text" name="create_user_form_email" placeholder="Email:"
            onChange={(e) => setEmail(e.target.value)} required></input>
        <input type="text" name="create_user_form_username" placeholder="username:"
            onChange={(e) => setUn(e.target.value)} required></input>
        <input type="text" name="create_user_form_password" placeholder="password:"
            onChange={(e) => setPw(e.target.value)} required></input>
        <button name="create_user_form_create_user" type="submit">Create User</button>
    </form>);
};

export default signupForm;