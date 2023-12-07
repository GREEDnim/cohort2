const email=document.querySelector("#email")
const password=document.querySelector("#password")
const button=document.querySelector("#submit");

let right=true;

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

function isValidPassword(password){
    return password.length>7;
}

function checkInputs(){
    let evalue=email.value;
    let pvalue=password.value;
    return isValidEmail(evalue) && isValidPassword(pvalue)
}

function inputChange(e){
    console.log("c")
    // this.value=e.target.value;
    if(checkInputs()) makeNormal();
    else makeDisabled();
}
function makeDisabled(){
    button.style.backgroundColor='red';
}

function makeNormal(){
    button.style.backgroundColor='green';
    button.style.left = '0px';
}

function moveIfInvalid(event){
    event.preventDefault();
    if(checkInputs()) {
        makeNormal();
        return;
    }
    console.log("wrong inps")
    if(right){
        button.style.left = '300px';

    }
    else{
        button.style.left = '-300px';
    }
    right=!right;
}

email.addEventListener('input',inputChange);
password.addEventListener('input',inputChange);
button.addEventListener('mouseenter',moveIfInvalid);

console.log(button)
makeDisabled();


