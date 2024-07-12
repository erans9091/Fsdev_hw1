
import App from "../components/App";
import SignupForm from "../components/Signup"
import LoginForm from "../components/Login";
import '../css/styles.css';
import '../css/globals.css';
import { signup, loginRap as login } from '../utils/fetchUtils'
const testLogin = true;
export default function Home() {
  if (testLogin) {
    return (<>
      <SignupForm creatFunc={signup}></SignupForm>
      <LoginForm loginFunc={login(() => { })}></LoginForm>
    </>)
  }
  return (
    <App />
  );
}
