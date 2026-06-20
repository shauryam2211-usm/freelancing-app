const express = require("express");

const router = express.Router();

const validate = require("../middleware/validate");

const {
    signupSchema,
    loginSchema
} = require("../schemas/auth.schema");

const {
    signup,
    login
} = require("../controllers/auth.controller");

router.post(
    "/signup",
    validate(signupSchema),
    signup
);

router.post(
    "/login",
    validate(loginSchema),
    login
);

module.exports = router;