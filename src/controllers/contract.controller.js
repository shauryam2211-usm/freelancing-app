const Contract = require("../models/contract");

const getMyContracts = async (req, res) => {
    try {

        const contracts = await Contract.find({
            $or: [
                {
                    clientId: req.user.userId
                },
                {
                    freelancerId: req.user.userId
                }
            ]
        });

        res.status(200).json(contracts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    getMyContracts
};