const Project = require("../models/project");

const createProject = async (req, res) => {
    try {

        const {
            title,
            description,
            budget,
            deadline,
            skills,
            category
        } = req.body;

        const project = await Project.create({
            title,
            description,
            budget,
            deadline,
            skills,
            category,
            clientId: req.user.userId
        });

        res.status(201).json({
            message: "Project created successfully",
            project
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createProject
};