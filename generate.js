//import modules
var jwt = require('jsonwebtoken');
var fs = require('fs')
//path to private key
var privateKey = fs.readFileSync('private.pem');
//expiratuion time (1h)
var exp =Math.floor(Date.now() / 1000) + (60 * 60)
var token = jwt.sign({foo: 'dhiraj',exp:exp},privateKey,{issuer:'test',algorithm:'RS256'});
console.log(token)
