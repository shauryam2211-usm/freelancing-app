const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    isClient,
    isFreelancer
} = require("../middleware/role");

const validate = require("../middleware/validate");

const {
    submissionSchema
} = require("../schemas/submission.schema");

const {
    submitWork,
    approveSubmission
} = require("../controllers/submission.controller");

router.post(
    "/contracts/:contractId/submit",
    auth,
    isFreelancer,
    validate(submissionSchema),
    submitWork
);

router.put(
    "/submissions/:submissionId/approve",
    auth,
    isClient,
    approveSubmission
);

module.exports = router;