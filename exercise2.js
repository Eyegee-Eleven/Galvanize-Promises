var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

// Write a callback function for the .catch() method so
// that if an error is returned it prints out only the
// message nested inside of it.





FortuneTeller.ask()
  .catch(message =>{
      console.log(message.error.message); 
  })