const { z } = require("zod");

const submissionSchema = z.object({
    message: z.string().min(10),

    githubLink: z.string().url()
});

module.exports = {
    submissionSchema
};