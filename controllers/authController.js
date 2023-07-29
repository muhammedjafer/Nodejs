module.exports.signup_get = (req, res) => {
    res.render('signup');
};

module.exports.login_get = (req, res) => {
    res.render('login');
};

// module.exports.singup_post = (req, res) => {
//     res.send('signup new');
// };

// module.exports.login_post = (req, res) => {
//     res.send('login new user');
// };