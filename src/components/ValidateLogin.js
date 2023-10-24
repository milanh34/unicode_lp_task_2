function ValidateLogin(mail, pass){
    let regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let errorMail = "";
    let errorPass = "";
    if (regexMail.test(mail)) {
        errorMail = "";
    }else{
        errorMail = "Incorrect Email Format";
    }
    if (regexPass.test(pass)) {
        errorPass = "";
    }else{
        errorPass = "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }
    return { errorMail, errorPass };
}

export default ValidateLogin;