const Submission =
require("../models/submission");

const Contract =
require("../models/contract");

const submitWork = async (req, res) => {
    try {

        const {
            description,
            attachmentUrl
        } = req.body;

        const submission =
        await Submission.create({
            contractId:
            req.params.contractId,

            freelancerId:
            req.user.userId,

            description,
            attachmentUrl
        });

        res.status(201).json({
            message:
            "Work submitted successfully",
            submission
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const approveSubmission = async (req, res) => {
    try {

        const submission =
        await Submission.findById(
            req.params.submissionId
        );

        if (!submission) {
            return res.status(404).json({
                message:
                "Submission not found"
            });
        }

        const contract =
        await Contract.findById(
            submission.contractId
        );

        if (!contract) {
            return res.status(404).json({
                message:
                "Contract not found"
            });
        }

        if (
            contract.clientId.toString() !==
            req.user.userId
        ) {
            return res.status(403).json({
                message:
                "Unauthorized"
            });
        }

        submission.status =
        "approved";

        await submission.save();

        contract.status =
        "completed";

        await contract.save();

        res.status(200).json({
            message:
            "Submission approved successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    submitWork,
    approveSubmission
};