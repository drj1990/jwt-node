var jwt = require('jsonwebtoken');
var fs = require('fs')
var util = require('./util.js')
//get args from command line
const args = util.getArgs();
var token = args['token']

//path to public key
var key = fs.readFileSync('public.pem')
try {
var decoded = jwt.verify(token, key,{issuer: 'mycompany inc.',algorithms:['RS256']});
var myJSON = JSON.stringify(decoded);
console.log('Decoded is ' +myJSON)
}
catch(error){
console.log("error->"+error)
}

