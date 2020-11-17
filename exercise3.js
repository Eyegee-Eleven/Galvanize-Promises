var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

function alwaysAsk (question) {
  return FortuneTeller.ask(question).then((resolve)=>{
      console.log(resolve.response)
  }).catch((fail) =>{
      console.log(fail.response)
  })
}

alwaysAsk(`Will it be a good day?`);


// Use the `alwaysAsk()` function here to log out the response
// you get from the question you ask (or the default one!)