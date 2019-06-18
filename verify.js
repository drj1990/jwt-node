var jwt = require('jsonwebtoken');
var fs = require('fs')

function getArgs() {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach(arg => {
            // long arg
            if (arg.slice(0, 2) === '--') {
                const longArg = arg.split('=');
                const longArgFlag = longArg[0].slice(2, longArg[0].length);
                const longArgValue = longArg.length > 1 ? longArg[1] : true;
                args[longArgFlag] = longArgValue;
            }
            // flags
            else if (arg[0] === '-') {
                const flags = arg.slice(1, arg.length).split('');
                flags.forEach(flag => {
                    args[flag] = true;
                });
            }
        });
    return args;
}

//get args from command line
const args = getArgs();
var token = args['token']

//path to public key
var key = fs.readFileSync('public.pem')
try {
var decoded = jwt.verify(token, key,{issuer: 'test',algorithms:['RS256']});
var myJSON = JSON.stringify(decoded);
console.log('Decoded is ' +myJSON)
}
catch(error){
console.log("error->"+error)
}

