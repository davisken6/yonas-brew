function userAge(){
    let is21 = prompt('Are you at least 21 years of age?');
    if (is21 == "yes"){
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


function guessingGame(){
  let userAnswer = prompt ("Guess a number between 1 and 50");
    console.log(userAnswer)

    while (userAnswer < 6 || userAnswer > 6){
        userAnswer = prompt("That answer is incorrect. Try again");
    }
   
   if (userAnswer == "6") {
       alert ("You got it right!");
   } 
}

function howMany(){
    let userNumber = prompt ("How many corgis do you want?");
    console.log(userNumber)
    for (let i = 0; i < userNumber; i++){
        
        const img = document.createElement("img");
        img.src = "https://www.maxpixel.net/static/photo/1x/Animal-Dog-Pet-Cute-Welsh-Corgi-Pembroke-Corgi-4248916.jpg";
        document.body.appendChild(img);
    }


}