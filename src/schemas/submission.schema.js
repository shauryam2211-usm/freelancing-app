const { z } = require("zod");

const submissionSchema = z.object({
    description: z.string().min(10),

    attachmentUrl: z.string().url()
});

module.exports = {
    submissionSchema
};