const User = require("../models/user.module.js");
const jwt = require('jsonwebtoken');
const authCtrl = {};

authCtrl.signupUser = async (req, res) => {
	try{
            const user = new User({
                email: req.body.email,
                password: hashed_password,
                user_type: 2,
                name: req.body.name,
                last_name: req.body.lastName,
                state: 1,
                created: new Date(),
                modified: new Date()
            });

            // Save user in the database
            User.create(user, (err, data) => {
                if (err) res.status(500).send({ success: false, error: "User not created" });
                else res.status(200).send({ success: true, payload: data });
            });

        // Validate request
        if (!req.body) res.status(400).send({ success: false, error: "Content can not be empty" });
        res.status(200).send({ success: true, payload: "" });
    }
    catch(e){
        res.status(400).send({ success: false, error: "Unknown" });
    }
}

authCtrl.login = async (req, res) => {
	try{
        res.json({ message: "Hello from server!" });

        // Validate request
        //if (!req.body) res.status(400).send({ success: false, error: "Content can not be empty" });
        //res.status(200).send({ success: true, payload: "" });
    }
    catch(e){
        res.status(400).send({ success: false, error: "Unknown" });
    }
}


authCtrl.identity = async (req, res) => {
	try{
        // Validate request
        if (!req.body) res.status(400).send({ success: false, error: "Content can not be empty" });
        res.status(200).send({ success: true, payload: "" });
    }
    catch(e){
        res.status(400).send({ success: false, error: "Unknown" });
    }
}

module.exports = authCtrl;
