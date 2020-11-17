var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

let seconedQuestion='Am I blue??' //simulating user input;

function sometimeAsk (question=seconedQuestion) {
    return FortuneTeller.ask(question)  //Created function to send FortuneTeller user inputed question 
}

function alwaysAsk (question=`Will it be a good day?`) {
    return FortuneTeller.ask(question)  //This function will ALWAYS pass a question to FortuneTeller
}

sometimeAsk().then((resolve)=>{ //Attempt user inputed question, print FortuneTeller response if applicable
    console.log(resolve.response)  
    
}).catch((failure)=>{ //If User Inputed question aka sometimeAsk Fails, then run the ALWAYS ask function
    alwaysAsk().catch((failure)=>{
        console.log(failure.error); //If all else fails print error message;
    });
});


// Use the `alwaysAsk()` function here to log out the response
// you get from the question you ask (or the default one!)