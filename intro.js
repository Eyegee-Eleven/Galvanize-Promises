// var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

// var question = `Will I find $100 today?`
// const thePromise = FortuneTeller.ask(question)

// thePromise.then(function (result) {
//   console.log(result)
// })

// var promise = new Promise(function(resolve, reject) { 
//     const x = "Galvanize"; 
//     const y = "galvanize"
//     if(x === y) { 
//       resolve(); 
//     } else { 
//       reject(); 
//     } 
//   }); 
  
//   promise. 
//       then(function () { 
//           console.log('Success! You are a Galvanize student!'); 
//       }). 
//       catch(function () { 
//           console.log('Some error has occured'); 
//       });  


// var promise = new Promise(function(resolve, reject){
//     /**does something probs asynce then... */
//     if(/*everything turn out okay*/){
//         resolve('hooray it worked!')
//     }else{
//         reject(Error('it broke'));
//     }
// })

// promise.then(function(result) {
//     console.log(result); // "Success message!"
//   }, function(err) {
//     console.log(err); // "Error object + message!"
//   });


// var promise = new Promise(function(resolve, reject) { 
//     resolve('Galvanize'); 
// }) 

// promise 
//     .then(function(successMessage) { 
//         console.log(successMessage); 
//     }, function(errorMessage) { 
//         console.log(errorMessage); 
//     }) 

// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then(() => console.log('Hello!')).then(() => console.log("Goodbye!")); 


// var promise = new Promise(function(resolve, reject) {
//     resolve(1);
//   });
  
//   promise.then(function(val) {
//     console.log(val); 
//     return val + 2;
//   }).then(function(val) {
//     console.log(val); 
//   }) 



// var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller


// // Take a look at the following code. Describe why `answer`
// // is logged as `undefined` when you first run this code.

// /* EXPLAIN: You first get undefined becuase the .then anyomus function takes in result  an anyomus function to execute, inside of there we are assigining anwswer to the result of the async (persumed) response,
// if we try to log outside of the anyomus function that takes in result as a param then we would not have access to result.response..... I think im 50% of the way there still looking deeper..
// */
// // Then, move the `console.log` statement to the right place
// // so that we see the response.
// var answer='';
// var question = `Will it rain today?`
// FortuneTeller.ask(question).then(function (result) {
//   answer = result.response
//   console.log('My Answer:', answer)
// })


// // Make sure to hit save before grabbing the URL above to submit!

// let promise= new Promise((resolve,reject) => {
//     let a=1+1;
//     if(a===2){
//         resolve('resolved')
//     }else{////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         reject('failed')
//     }
// })


// promise.then((message)=>{
//     console.log('this is in the then ' + message)
// }).catch((message)=>{
//     console.log('something went wrong')
// });

// var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

// const thePromise = FortuneTeller.ask() // No question provided!

// thePromise.then(function (result) {
//   console.log(result)
// })

//  thePromise.catch(function (error) {
//    console.error(error)
//  })

// function log(val) {
//     console.log(val);
// }

// function randomDelay(cb, val) {
//     setTimeout(function() {
//         cb(val);
//     }, Math.random() * 3000);
// }

// randomDelay(log, 1);
// randomDelay(log, 2);
// randomDelay(log, 3);


new Promise(function(resolve, reject) {
    var x = Math.random();
    return x < 0.5 ? resolve() : reject([x, 1]);
  }).then(function() {
    return new Promise(function(resolve, reject) {
      var y = Math.random();
      return y < 0.5 ? resolve() : reject([y, 2]);
    });
  }).then(function() {
    console.log("Both promises sucessfully resolved!");
  }).catch(function(val) {
    console.log("Promise #" + val[1] + " rejected :(; value was " + val[0]);
  });