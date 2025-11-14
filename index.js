let usernames = [];

function signup(userName) {
    if (usernames.includes(userName)) {
        return "User Already Registered, Please Login";
    }
    usernames.push(userName);
    return "Signup Successful, Please Login";
}

function login(userName, password) {
    
    const correctPassword = "Emp@123";

    
    if (!usernames.includes(userName)) {
        return "User Not Found, Please Signup";
    }

    
    if (password !== correctPassword) {
        return "Wrong Password";
    }

    
    return "Login Successful";
}

module.exports = { signup, login, usernames };
