import jwt from 'jsonwebtoken'
const privateKey = "7b6c2011713361c3013817e3c5e17024304469233eb69a44d558db4946331419"

export function signJwt(body) {
    try {
        return jwt.sign(body, privateKey, { expiresIn: '24h' })
    } catch(err) {
        console.error(err)
        return false
    }

}

export function verifyJwt(token) {
    try {
        return jwt.verify(token, privateKey)
    } catch(err) {
        console.error(err)
        return false
    }
}
