const { z } = require("zod");

const signupSchema = z.object({
    name: z.string().min(3),

    email: z.string().email(),

    password: z.string().min(6),

    role: z.enum([
        "client",
        "freelancer"
    ])
});

const loginSchema = z.object({
    email: z.string().email(),

    password: z.string().min(6)
});

module.exports = {
    signupSchema,
    loginSchema
};