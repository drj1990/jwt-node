# jwt-node
Creating a JWT token in node js &amp; verifying the token after it has been issued.

Step 1: Generate the private key

    openssl genrsa -out private.pem 2048

Step 2: generate public key

    openssl rsa -in private.pem -pubout > public.pem

Step 3: install jsonwebtoken npm module

    npm install jsonwebtoken

Step 4: run generate.js to generate JWT token

    node generate.js

Step 5: run verify.js to vetify the token

    node verify.js --token=JWT_TOKEN
