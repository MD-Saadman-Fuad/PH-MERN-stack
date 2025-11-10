/**
 * 1. after login server will create a JWT token for the user
 * 2. store it in client side (localstorage, httpOnly cookie, in memory)
 * 3. for asking for sensitive data client will send the token in the request header
 * 4. server will verify the token using the secret key. token valid -> give data, invalid -> deny access
 * 
 * JWT token structure:
 *
 * 1. Header: contains metadata about the token, including the signing algorithm
 * 2. Payload: contains the claims (user information, expiration time, etc.)
 * 3. Signature: created by signing the header and payload with the secret key
 * */