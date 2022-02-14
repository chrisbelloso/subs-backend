const express = require("express");
const router = express.Router();

const { check } = require('express-validator');


const { loginUser, SignUpUser } = require("../controllers/userController");
const { validateJwt, revalidateJwt } = require("../helpers/processJwt");
const { validateFields } = require("../helpers/validateFields");


// POST/login
router.post("/login", [
    check("email", "Email field is required").isEmail(),
    check("password", "Password field is required").not().isEmpty(),
    validateFields
], loginUser);


//  POST /signup
router.post("/signup", [
    check("name", "Name field is required").not().isEmpty(),
    check("email", "Email field is required").isEmail(),
    check("password", "Password must be 8 characters long with capital letter & symbol")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
    validateFields
], SignUpUser);

//POST/renew
router.post("/renew", validateJwt, revalidateJwt);


module.exports = router;