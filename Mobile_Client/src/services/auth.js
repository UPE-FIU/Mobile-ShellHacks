import jwt from 'jsonwebtoken';
const JWT_SECRETE = '';
const JWT_OPTS = {
    issuer: 'InStore',
};

const createToken = user => {
    if (user && !user.id) {
        return null;
    }
    const payload = {
        id: user._id,
    }
    return jwt.sign(payload, JWT_SECRETE, JWT_OPTS);
};

const verifyToken = token => {
    return jwt.verify(token, JWT_SECRETE, JWT_OPTS);
}

const getTokenFromHeader = req => {
    const token = req.headers.authorization;
    if (token) {
        const arr = token.split(' ');
        if (arr[0] == 'Bearer' && arr[1]) {
            try {
                return veryfyToken(arr[1]);
            } catch (error) {
                return null;
            }
        }
    }
}

export const authServices = {//export JWT services
    createToken,
    verifyToken,
    getTokenFromHeader,
}