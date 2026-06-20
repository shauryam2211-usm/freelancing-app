const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    isFreelancer
} = require("../middleware/role");

const validate = require("../middleware/validate");

const {
    submissionSchema
} = require("../schemas/submission.schema");

const {
    submitWork
} = require("../controllers/submission.controller");

router.post(
    "/contracts/:contractId/submit",
    auth,
    isFreelancer,
    validate(submissionSchema),
    submitWork
);

module.exports = router;