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
    createProject,
    getAllProjects,
    getProjectById,
    getMyProjects
} = require("../controllers/project.controller");

router.get(
    "/",
    getAllProjects
);

router.get(
    "/mine",
    auth,
    isClient,
    getMyProjects
);

router.get(
    "/:id",
    getProjectById
);

router.post(
    "/",
    auth,
    isClient,
    validate(projectSchema),
    createProject
);

module.exports = router;