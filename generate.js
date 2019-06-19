//import modules
var jwt = require('jsonwebtoken');
var fs = require('fs')
//path to private key
var privateKey = fs.readFileSync('private.pem');
//expiratuion time (1h)
var exp = Math.floor(Date.now() / 1000) + (60 * 60)
var token = jwt.sign({ name: 'dhiraj', id: 123, exp: exp }, privateKey, { issuer: 'mycompany inc.', algorithm: 'RS256' });
console.log(token)
