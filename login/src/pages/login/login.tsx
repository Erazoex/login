import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Reference from "../../components/reference/reference";
import GithubLogo from '../../github.svg';
import GoogleLogo from '../../google.png';
import "./login.css";

export function Login() {
    return(
    <div className="bg-stone-700 text-white h-screen w-screen flex justify-center items-center flex-col">
        <div className="mb-8 font-semibold text-2xl">
            Sign in to your account
        </div>
        <div className="bg-stone-700 h-auto w-1/3 font-sans p-5 rounded drop-shadow-md">
            <form action="">
                <Input title="Name" type="text" placeholder="Name"/>
                <Input title="Password" type="password" placeholder="Password"/>
                <p className="mb-4">Sign in with</p>
                <div className="flex justify-center mb-8">
                    <Reference img={GithubLogo}/>
                    <Reference img={GoogleLogo}/>
                </div>
                <Button value="Login"/>
            </form>
        </div>
    </div>)
}