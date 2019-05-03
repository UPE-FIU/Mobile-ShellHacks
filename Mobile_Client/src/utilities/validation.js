
//validates a given email
const isEmailValid = (email) => {
    let filter = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return filter.test(String(email).toLowerCase())
}

//validates a given password
const isPasswordValid = (password) => {
    return password.length > 7;
}

export default { isEmailValid, isPasswordValid };