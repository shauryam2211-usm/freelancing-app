const isClient = (req, res, next) => {

    if (req.user.role !== "client") {
        return res.status(403).json({
            message: "Client access only"
        });
    }

    next();
};

const isFreelancer = (req, res, next) => {

    if (req.user.role !== "freelancer") {
        return res.status(403).json({
            message: "Freelancer access only"
        });
    }

    next();
};

module.exports = {
    isClient,
    isFreelancer
};