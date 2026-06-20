const { z } = require("zod");

const projectSchema = z.object({
    title: z.string().min(5),

    description: z.string().min(20),

    budget: z.number().positive(),

    deadline: z.string(),

    category: z.string(),

    skills: z.array(
        z.string()
    )
});

module.exports = {
    projectSchema
};