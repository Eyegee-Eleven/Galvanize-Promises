var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

let seconedQuestion='Am I blue??'

function sometimeAsk (question=seconedQuestion) {
    return FortuneTeller.ask(question)
}

function alwaysAsk (question=`Will it be a good day?`) {
    return FortuneTeller.ask(question)
}

sometimeAsk().then((resolve)=>{
    console.log(resolve.response)
    
}).catch((failure)=>{
    alwaysAsk().catch((failure)=>{
        console.log(failure.error);
    });
});


// Use the `alwaysAsk()` function here to log out the response
// you get from the question you ask (or the default one!)