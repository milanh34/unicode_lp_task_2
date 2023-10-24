import {Link} from "react-router-dom";
import ValidateLogin from "./ValidateLogin";
// import { errorMail, errorPass } from "./ValidateLogin";
import { useState } from "react";

function Login(){

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [errorPass, setErrorPass] = useState("");

    let checkSubmit = (event) => {
        const { errorMail, errorPass } = ValidateLogin(mail, pass);
        event.preventDefault();
        if(errorMail || errorPass){
            setErrorMail(errorMail);
            setErrorPass(errorPass);
        }else{
            setErrorMail("");
            setErrorPass("");
            document.getElementById("toast-success").classList.remove("invisible");
            document.getElementById("toast-success").classList.add("visible");
        }
    }

    let changeMail = (event) => {
        setMail(event.target.value);
    }

    let changePass = (event) => {
        setPass(event.target.value);
    }

    let success = () => {
        window.location.reload();
    }

    let cancel = () => {
        document.getElementById("toast-success").classList.add("invisible");
        document.getElementById("toast-success").classList.remove("visible");
    }

    document.title = "Login Page";

    return(
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-4 space-y-4 md:space-y-6 sm:p-4">
                        <h1 id="heading" className="text-xl font-bold leading-tight text-center tracking-tight md:text-2xl text-white">Login Page</h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={checkSubmit}>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Email</label>
                                </div>
                                <input onChange={changeMail} type="email" id="email" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" autoFocus required />
                                <p className="text-sm inline-block text-red-400">{errorMail}</p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-white">Password</label>
                                </div>
                                <input onChange={changePass} type="password" id="password" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                <p className="text-sm inline-block text-red-400">{errorPass}</p>
                            </div>
                            <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Login</button>
                            <p className="text-sm font-light text-gray-400">Don’t have an account yet? <Link to="/signup" className="font-medium hover:underline text-blue-500">Sign Up here</Link></p>
                        </form>
                    </div>
                </div>
                <div id="toast-success" className="mt-5 flex items-center w-full max-w-xs p-4 rounded-lg border border-gray-700 shadow text-white bg-green-800 invisible" role="alert">
                    <div className="text-sm font-medium">
                        Login Successful !
                    </div>
                    <div className="flex items-center ml-auto space-x-2">
                        <button className="text-sm font-medium  p-1.5 rounded-lg text-gray-200 hover:bg-green-900" onClick={success}>OK</button>
                        <button className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 text-red-300 hover:text-red-500 bg-geen-800 hover:bg-green-900" onClick={cancel}>
                            <svg className="w-3 h-3" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;