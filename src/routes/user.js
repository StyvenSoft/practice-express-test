const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    return res.status(200).json('All user sent');
});

router.get('/:id', (req, res) => {
    if(req.params.id === "user01") {
        return res.status(200).json('User found: user01');
    }
        return res.status(404).json('User not found!')
});

router.post('/', (req, res) => {
    const {username, password} = req.body;
    if(username && password) {
        return res.status(201).json('User created');
    }
    res.status(400).json('User not created!');
});

module.exports = router;