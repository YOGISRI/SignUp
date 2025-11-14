let usernames = [];

function signup(userName) {
    if (usernames.includes(userName)) {
        return "User Already Registered, Please Login";
    }
    usernames.push(userName);
    return "Signup Successful, Please Login";
}

module.exports = { signup, usernames };
