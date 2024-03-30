const signup = require('../models/signup');

const signupController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await signup.create({
            name,
            email,
            password
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = signupController;