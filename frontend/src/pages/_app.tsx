
import App from "../components/App";
import SignupForm from "../components/Signup"
import LoginForm from "../components/Login";
import '../css/styles.css';
import '../css/globals.css';
const testLogin = true;
export default function Home() {
  if (testLogin) {
    return (<>
      <SignupForm creatFunc={() => { }}></SignupForm>
      <LoginForm></LoginForm>
    </>)
  }

  return (
    <App />
  );
}
