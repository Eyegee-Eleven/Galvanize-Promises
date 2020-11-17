var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller


// Take a look at the following code. Describe why `answer`
// is logged as `undefined` when you first run this code.

/* EXPLAIN: You first get undefined becuase the .then anyomus function takes in result  an anyomus function to execute, inside of there we are assigining anwswer to the result of the async (persumed) response,
if we try to log outside of the anyomus function that takes in result as a param then we would not have access to result.response..... I think im 50% of the way there still looking deeper..
*/
// Then, move the `console.log` statement to the right place
// so that we see the response.
var answer='';
var question = `Will it rain today?`
FortuneTeller.ask(question).then(function (result) {
  answer = result.response
  console.log('My Answer:', answer)
})


// Make sure to hit save before grabbing the URL above to submit!