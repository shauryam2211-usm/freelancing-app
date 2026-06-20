    const Bid = require("../models/bid");
const Project = require("../models/project");
const Contract = require("../models/contract");

const placeBid = async (req, res) => {
    try {
         console.log("placeBid hit");

        const {
            proposedAmount,
            deliveryDays,
            coverLetter
        } = req.body;

        const bid = await Bid.create({
            projectId: req.params.projectId,
            freelancerId: req.user.userId,
            proposedAmount,
            deliveryDays,
            coverLetter
        });

        res.status(201).json({
            message: "Bid placed successfully",
            bid
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getMyBids = async (req, res) => {
    try {

        const bids = await Bid.find({
            freelancerId: req.user.userId
        });

        res.status(200).json(bids);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const acceptBid = async (req, res) => {
    try {

        const bid =
        await Bid.findById(
            req.params.bidId
        );

        if (!bid) {
            return res.status(404).json({
                message: "Bid not found"
            });
        }

        const project =
        await Project.findById(
            bid.projectId
        );

        const contract =
        await Contract.create({
            projectId: project._id,
            clientId: project.clientId,
            freelancerId: bid.freelancerId,
            bidId: bid._id,
            amount: bid.proposedAmount
        });

        bid.status = "accepted";

        await bid.save();

        res.status(200).json({
            message:
            "Bid accepted successfully",
            contract
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    placeBid,
    getMyBids,
    acceptBid
};