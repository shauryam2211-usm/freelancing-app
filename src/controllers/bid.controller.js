const Bid = require("../models/bid");

const placeBid = async (req, res) => {
    try {

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

module.exports = {
    placeBid
};