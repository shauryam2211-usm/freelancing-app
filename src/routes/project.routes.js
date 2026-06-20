const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    isClient
} = require("../middleware/role");

const validate = require("../middleware/validate");

const {
    projectSchema
} = require("../schemas/project.schema");

const {
    createProject
} = require("../controllers/project.controller");

router.post(
    "/",
    auth,
    isClient,
    validate(projectSchema),
    createProject
);

module.exports = router;