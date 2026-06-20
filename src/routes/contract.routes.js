const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    getMyContracts
} = require("../controllers/contract.controller");

router.get(
    "/contracts/mine",
    auth,
    getMyContracts
);

module.exports = router;