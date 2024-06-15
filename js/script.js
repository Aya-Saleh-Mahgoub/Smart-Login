// SignUp Functions

const nameSignUp = document.getElementById("nameSignUp"); 
const emailSignUp = document.getElementById("emailSignUp"); 
const passwordSignUp = document.getElementById("passwordSignUp"); 
const signupBtn = document.getElementById("signupBtn"); 

let users;
if(localStorage.getItem("users") == null)
{
    users = [];
}
else
{
    users = JSON.parse(localStorage.getItem("users"));
}
function signUp()
{

    formValidation();
    isEmailExist();

    if(formValidation() == true && isEmailExist() == false)
    {
        let user = 
        {
            name:nameSignUp.value,
            email:emailSignUp.value,
            password:passwordSignUp.value
        }

        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
        const SuccessMsg = document.getElementById("SuccessMsg");
        SuccessMsg.classList.replace("d-none", "d-block");
        const signin = document.getElementById("signin")
        signin.classList.replace("d-none", "d-block");
    }
    else
    {
        const failSignUpMsg = document.getElementById("failSignUpMsg");
        failSignUpMsg.classList.replace("d-none", "d-block");
    }

}

function usernameValidation()
{
    const usernameValidationMsg = document.getElementById("usernameValidationMsg");

    let regex = /^[A-Za-z]{3,40}(\s?[A-Za-z]{3,40})?$/
    if( regex.test(nameSignUp.value) == true && nameSignUp.value != "")
    {
        nameSignUp.classList.add("is-valid");
        nameSignUp.classList.remove("is-invalid");
        usernameValidationMsg.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        nameSignUp.classList.add("is-invalid");
        nameSignUp.classList.remove("is-valid");
        usernameValidationMsg.classList.replace("d-none", "d-block");

        return false
    }
}
function userPasswordValidation()
{
    let regex = /^.{5,40}$/;
    const PasswordValidationMsg = document.getElementById("PasswordValidationMsg");

    if( regex.test(passwordSignUp.value) == true && passwordSignUp.value != "")
    {
        passwordSignUp.classList.add("is-valid");
        passwordSignUp.classList.remove("is-invalid");
        PasswordValidationMsg.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        passwordSignUp.classList.add("is-invalid");
        passwordSignUp.classList.remove("is-valid");
        PasswordValidationMsg.classList.replace("d-none", "d-block");

        return false
    }
}

function userEmailValidation()
{
    const EmailValidationMsg = document.getElementById("EmailValidationMsg");

    let regex = /@[a-z]{5,30}(\.com)$/;
    if( regex.test(emailSignUp.value) == true && emailSignUp.value != "")
    {
        emailSignUp.classList.add("is-valid");
        emailSignUp.classList.remove("is-invalid");
        EmailValidationMsg.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        emailSignUp.classList.add("is-invalid");
        emailSignUp.classList.remove("is-valid");
        EmailValidationMsg.classList.replace("d-none", "d-block");

        return false
    }
}

function isEmailExist()
{
    let accountExistMsg = document.getElementById("accountExistMsg");
    
    for(let i = 0; i < users.length; i++)
    {

        if(users[i].name == nameSignUp.value|| 
        users[i].email == emailSignUp.value)
        {
            accountExistMsg.classList.replace("d-none", "d-block");
            nameSignUp.classList.remove("is-valid");
            emailSignUp.classList.remove("is-valid");
            passwordSignUp.classList.remove("is-valid");

            return true
        }
    }
    return false
}
function formValidation()
{
    usernameValidation();   
    userEmailValidation();
    userPasswordValidation();

    if( (usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true))
    {
        return true
    }
    else
    {
        return false
    }
}
 // SignUp Functions Ends

 // Login Functions

var username = localStorage.getItem("sessionUsername");
function login()
{
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let incorrectInputs = document.getElementById("incorrectInputs");

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        let requiredInputs = document.getElementById("requiredInputs");
        requiredInputs.classList.replace("d-none", "d-block");
        return false
    }

    for(var i = 0; i < users.length; i++)
    {
        if(users[i].email== loginEmail.value && 
        users[i].password== loginPassword.value)
        {
            
            localStorage.setItem('sessionUsername', users[i].name)
            loginBtn.setAttribute("href", "welcome.html");
        }
        else
        {
            incorrectInputs.classList.replace("d-none", "d-block");
        }
    }
}
 // Login Functions Ends
 // Welcome User Functions

function WelcomeUser()
{
    document.getElementById("username").innerHTML = "Welcome "+ username;

}

function logout() {
    localStorage.removeItem('sessionUsername')
}
