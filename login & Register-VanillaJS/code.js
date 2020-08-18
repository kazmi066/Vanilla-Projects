// Top Both Buttons
let signBtns = document.querySelector('.sign-btns');

// Register Section
let register = document.querySelector('#register');

// Login Section
let signin = document.querySelector('#signin');

// Login Button
let loginBtn = document.querySelector('#logBtn');
loginBtn.addEventListener('click', loginUser);

// Register button
let regBtn = document.querySelector('#regBtn');
regBtn.addEventListener('click', registerUser);

// Toggle top Two buttons
signBtns.addEventListener('click',signSection);


// all input fields (Register Section)
let firstName = document.querySelector('#myForm2 .firstName');
let lastName = document.querySelector('#myForm2 .lastName');
let email = document.querySelector('#myForm2 .email');
let password = document.querySelector('#myForm2 .password');


// all input fields (Login Section)
let logEmail = document.querySelector('#myForm .email');
let logPassword = document.querySelector('#myForm .password');


// All errors handlers
var first_error = document.getElementById('first_error');
var last_error = document.getElementById('last_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('pass_error');
var email_error_log = document.getElementById('email_error_log');
var pass_error_log = document.getElementById('pass_error_log');

// Event listeners for input fields
firstName.addEventListener('blur', firstVerify);
lastName.addEventListener('blur', lastVerify);
email.addEventListener('blur', emailVerify);
password.addEventListener('blur', passVerify);
logEmail.addEventListener('blur', logEmailVerify);
logPassword.addEventListener('blur', logPassVerify);


function signSection(e){
    // remove Active class from Both
    let btns = document.querySelectorAll('.sign-btns .sign');
    btns.forEach(btn => {
        btn.classList.remove('active');
    })

    e.target.classList.add('active');

    if(e.target.classList.contains('signin')){
        signin.style.display = 'initial';
        register.style.display = 'none';
    }
    else{
        signin.style.display = 'none';
        register.style.display = 'initial';
    }
}


function regValidator(item){
    let regexName = /^[A-Za-z]+$/i;
    let regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let regexPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

    let save = item.className;

    switch(save){
        case "firstName":{
            return (regexName.test(item.value));
        }
        case "lastName":{
            return (regexName.test(item.value));
        }
        case "email":{
            return (regexEmail.test(item.value));
        }
        case "password": {
            return (regexPass.test(item.value));
        }
        default :{
            console.log('none');
        }
    }
}


function registerUser(e){
    e.preventDefault();

    if((firstName.value === "")){
        firstName.style.border = `3px solid red`;
        first_error.textContent = 'Name is required';
        firstName.focus();
        return false;
    } 

    if(firstName.value.length < 3){
        firstName.style.border = `3px solid red`;
        first_error.textContent = 'Must be at-least 3 characters (e.g; john)';
        firstName.focus();
        return false;
    }
    
    if(lastName.value == ""){
        lastName.style.border = `3px solid red`;
        last_error.textContent = 'Name is required';
        lastName.focus();
        return false;
    } 

    if(lastName.value.length < 3){
        lastName.style.border = `3px solid red`;
        last_error.textContent = 'Must be at-least 3 characters (e.g; doe)';
        lastName.focus();
        return false;
    }


    if(email.value == ""){
        email.style.border = `3px solid red`;
        email_error.textContent = 'email is required (e.g; awais@gmail.com)';
        regEmail.focus();
        return false;
    } 

    if(password.value == ""){
        password.style.border = `3px solid red`;
        pass_error.textContent = 'password is required (at-least 8 characters)';
        password.focus();
        return false;
    } 

    firstVerify();
    lastVerify();
    emailVerify();
    passVerify();
    
    if(firstVerify() && lastVerify() && emailVerify() && passVerify()){
        console.log('submitted');
    }
    else{
        return false;
    }
}


function loginUser(e){
    e.preventDefault();

    if(logEmail.value == ""){
        logEmail.style.border = `3px solid red`;
        email_error.textContent = 'email is required (e.g; awais@gmail.com)';
        logEmail.focus();
        return false;
    } 

    if(logPassword.value == ""){
        logPassword.style.border = `3px solid red`;
        pass_error.textContent = 'password is required (at-least 8 characters)';
        logPassword.focus();
        return false;
    } 

    logEmailVerify();
    logPassVerify();
    
    if(logEmailVerify() && logPassVerify()){
        console.log('submitted');
    }
    else{
        return false;
    }
}


function firstVerify(){
    if(firstName.value != ""){
        if(regValidator(firstName)){
            firstName.style.border = 'none';
            first_error.textContent = "";
            return true;
        }
        else{
            firstName.style.border = `3px solid red`;
            first_error.textContent = 'Valid name is required (e.g; john)';
            firstName.focus();
            return false;
        }
    }
}

function lastVerify(){
    if(lastName.value != ""){
        if(regValidator(lastName)){
            lastName.style.border = 'none';
            last_error.textContent = "";
            return true;
        }
        else{
            lastName.style.border = `3px solid red`;
            last_error.textContent = 'Valid name is required (e.g; doe)';
            lastName.focus();
            return false;
        }
    }
}

function emailVerify(){
    if(email.value != ""){
        if(regValidator(email)){
            email.style.border = 'none';
            email_error.textContent = "";
            return true;
        }
        else{
            email.style.border = `3px solid red`;
            email_error.textContent = 'Valid email is required (e.g; awais@gmail.com)';
            email.focus();
            return false;
        }
    }
}

function passVerify(){
    if(password.value != ""){
        if(regValidator(password)){
            password.style.border = 'none';
            pass_error.textContent = "";
            return true;
        }
        else{
            password.style.border = `3px solid red`;
            pass_error.innerHTML = `<ul>
                <li>Must be between 8 and 20 character</li>
                <li>Must contain integers</li>
                <li>Must contain special characters and alphabets(Capital/small)</li>
            </ul>`;
            password.focus();
            return false;
        }
    }
}

function logEmailVerify(){
    if(logEmail.value != ""){
        if(regValidator(logEmail)){
            logEmail.style.border = 'none';
            email_error_log.textContent = "";
            return true;
        }
        else{
            logEmail.style.border = `3px solid red`;
            email_error_log.textContent = 'Valid email is required (e.g; awais@gmail.com)';
            logEmail.focus();
            return false;
        }
    }
}

function logPassVerify(){
    if(logPassword.value != ""){
        if(regValidator(logPassword)){
            logPassword.style.border = 'none';
            pass_error_log.textContent = "";
            return true;
        }

        else{
            logPassword.style.border = `3px solid red`;
            pass_error_log.innerHTML = `Please Enter a valid Password`;
            logPassword.focus();
            return false;
        }
    }
}