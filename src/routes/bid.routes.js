const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    isFreelancer
} = require("../middleware/role");

const validate = require("../middleware/validate");

const {
    bidSchema
} = require("../schemas/bid.schema");

const {
    placeBid
} = require("../controllers/bid.controller");

router.post(
    "/projects/:projectId/bids",
    auth,
    isFreelancer,
    validate(bidSchema),
    placeBid
);

module.exports = router;