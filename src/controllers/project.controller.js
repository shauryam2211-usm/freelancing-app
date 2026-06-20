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

const getAllProjects = async (req, res) => {
    try {

        const projects = await Project.find();

        res.status(200).json(projects);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getProjectById = async (req, res) => {
    try {

        const project = await Project.findById(
            req.params.id
        );

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        res.status(200).json(project);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getMyProjects = async (req, res) => {
    try {

        const projects = await Project.find({
            clientId: req.user.userId
        });

        res.status(200).json(projects);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    getMyProjects
};