const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    isClient,
    isFreelancer
} = require("../middleware/role");

const validate = require("../middleware/validate");

const {
    bidSchema
} = require("../schemas/bid.schema");

const {
    placeBid,
    getMyBids,
    acceptBid
} = require("../controllers/bid.controller");

router.post(
    "/projects/:projectId/bids",
    auth,
    isFreelancer,
    validate(bidSchema),
    placeBid
);

router.get(
    "/bids/mine",
    auth,
    isFreelancer,
    getMyBids
);

router.put(
    "/bids/:bidId/accept",
    auth,
    isClient,
    acceptBid
);
router.get("/test-bid", (req, res) => {
    res.json({
        message: "Bid route working"
    });
});
console.log("Bid routes loaded");

module.exports = router;