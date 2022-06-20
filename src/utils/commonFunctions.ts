import constants from "./constants";

interface validationProps{
    caseName : string,
    name : string,
    email : string,
    password : string,
    userName : string,
    mobileNumber : string
}


const validation = (props : validationProps)=>{
    const {caseName, name, email, password, userName, mobileNumber } = props;
    switch(caseName){
        case "ValidateName" :{
            return constants.nameRegex.test(name)
        }
        case "ValidatePassword" :{
            return constants.passwordRegex.test(password)
        }
        case "ValidateMobileNumber" :{
            return constants.phoneNumberRegex.test(mobileNumber)
        }
        case "ValidateEmail" :{
            return constants.emailRegex.test(email)
        }
        case "ValidateUserName" :{
            return constants.userNameRegex.test(userName)
        }
    }
}

export default validation;
