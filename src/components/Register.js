import {Link} from "react-router-dom";
import ValidateRegister from "./ValidateRegister";
import ShowDetails from "./ShowDetails";
import {useState} from "react";

function Register(){
    const [Register, setRegister] = useState("Sign Up Now");
    const [fullName, setFullName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [phone, setPhone] = useState("");
    const [bdate, setBdate] = useState("");
    const [gender, setGender] = useState("");
    const [errorFullName, setErrorFullName] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const [errorConfirmPass, setErrorConfirmPass] = useState("");
    const [errorPhone, setErrorPhone] = useState("");

    let changeFullName = (event) => {
        setFullName(event.target.value);
    }
    let changeMail = (event) => {
        setMail(event.target.value);
    }
    let changePass = (event) => {
        setPass(event.target.value);
    }
    let changeConfirmPass = (event) => {
        setConfirmPass(event.target.value);
    }
    let changePhone = (event) => {
        setPhone(event.target.value);
    }
    let changeBdate= (event) => {
        setBdate(event.target.value);
    }
    let changeGender= (event) => {
        setGender(event.target.value);
    }

    let checkRegister = (event) => {
        event.preventDefault();
        const {errorFullName, errorMail, errorPass, errorConfirmPass, errorPhone} = ValidateRegister(fullName, mail, pass, confirmPass, phone);
        if(errorFullName || errorMail || errorPass || errorConfirmPass || errorPhone){
            setErrorFullName(errorFullName);
            setErrorMail(errorMail);
            setErrorPass(errorPass);
            setErrorConfirmPass(errorConfirmPass);
            setErrorPhone(errorPhone);
        }else{
            setErrorFullName("");
            setErrorMail("");
            setErrorPass("");
            setErrorConfirmPass("");
            setErrorPhone("")
            setTimeout(() => {
                document.getElementById("heading").style.color = "lightGreen";
                setRegister("Sign Up Successful !!")
            }, 500);
            setTimeout(() => {
                document.getElementById("registerForm").classList.add("hidden");
                document.getElementById("details").classList.remove("hidden");
                document.getElementById("details").classList.add("flex");
            }, 2500);
        }
    }

    let goback = () => {
        window.location.reload();
    }
    document.title = "Sign Up Page";
    return(
        <section className="bg-gray-900">
            <div id="registerForm" className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-4 space-y-4 md:space-y-6 sm:p-4">
                        <h1 id="heading" className="text-xl font-bold leading-tight text-center tracking-tight md:text-2xl text-white">{Register}</h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={checkRegister}>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="fullName" className="inline-block mb-1 text-sm font-medium text-white">Full Name</label>
                                </div>
                                <input onChange={changeFullName} type="text" name="fullName" id="fullName" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" autoFocus required />
                                    <p className="text-sm inline-block text-red-400">{errorFullName}</p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Email</label>
                               </div> 
                               <input onChange={changeMail} type="email" name="email" id="email" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                    <p className="text-sm inline-block text-red-400">{errorMail}</p>
                            </div>
                            <div> 
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-white">Password</label>
                               </div>
                               <input onChange={changePass} type="password" name="password" id="password" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                    <p className="text-sm inline-block text-red-400">{errorPass}</p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="confirm-password" className="block mb-1 text-sm font-medium text-white">Confirm password</label>
                                </div> 
                                <input onChange={changeConfirmPass} type="password" name="confirm-password" id="confirm-password" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                    <p className="text-sm inline-block text-red-400">{errorConfirmPass}</p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-white">Phone no.</label>
                                </div> 
                               <input onChange={changePhone} type="tel" name="phone" id="phone" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                    <p className="text-sm inline-block text-red-400">{errorPhone}</p>
                            </div>
                            <div> 
                                <div className="flex justify-between">
                                    <h3 className="block mb-1 text-sm font-medium text-white">Gender</h3>
                                </div>
                                <ul className="items-center w-full text-sm font-medium border  rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
                                    <li className="w-full border-b sm:border-b-0 sm:border-r border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input onChange={changeGender} id="male" type="radio" value="Male" name="gender"  className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500" required/>
                                            <label htmlFor="male" className="w-full py-3 ml-2 text-sm font-medium text-gray-300">Male </label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b sm:border-b-0 sm:border-r border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input onChange={changeGender} id="female" type="radio" value="Female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500" required/>
                                            <label htmlFor="female" className="w-full py-3 ml-2 text-sm font-medium text-gray-300">Female</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="bdate" className="block mb-1 text-sm font-medium text-white">Birth Date</label>
                                </div>
                                <input onChange={changeBdate} type="date" name="bdate" id="bdate" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <button className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Sign Up</button>
                            <p className="text-sm font-light text-gray-400">Already have an account? <Link to="/unicode_lp_task_2/login" className="font-medium hover:underline text-blue-500">Login here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <div id="details" className="hidden flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <ShowDetails fullname={fullName} mail={mail} pass={pass} phone={phone} gender={gender} bdate={bdate}/>
                <button className="text-blue-600 mt-10 underline hover:text-blue-400" onClick={goback}>Go back</button>
            </div>
        </section>
    )
}

export default Register