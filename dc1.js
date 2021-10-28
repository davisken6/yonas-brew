function userAge(){
    let is21 = prompt('Are you at least 21 years of age?');
    if(is21 == "yes"){
        alert ("Welcome to my page!");
    } else {
        alert ("Check out Disney.com");
    }

}


function userName(){
    let userName = prompt ("What is your name?");
    document.write("Welcome " + userName)
}

function userEmail(){
    let userEmail = prompt ('Enter your email to sign up for our News Letter:');
     document.write('<h3>' + userEmail + '</h3>')
}


