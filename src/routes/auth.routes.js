const express = require("express");

const router = express.Router();

const validate = require("../middleware/validate");

const {
    signupSchema
} = require("../schemas/auth.schema");

const {
    signup
} = require("../controllers/auth.controller");

router.post(
    "/signup",
    validate(signupSchema),
    signup
);

module.exports = router;