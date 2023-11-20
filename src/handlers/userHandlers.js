const loginUserHandlers = (req, res, next) => {
    console.log(req.body);
    res.send(`Hello`);
    next();

}

const addUserHandlers = (req, res, next) => {
    console.log(req.query.nama);
    res.send('Hello World!');
    next();
}

const editUserHandlers = (req, res, next) => {
    console.log(req.body);
    res.send('user edited!');
    next();
}

const deleteUserHandlers = (req, res, next) => {
    console.log(req.body);
    res.send('user deleted!');
    next();
}

module.exports = { addUserHandlers, loginUserHandlers, editUserHandlers, deleteUserHandlers};