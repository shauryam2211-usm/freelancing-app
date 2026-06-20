const { z } = require("zod");

const bidSchema = z.object({
    proposedAmount: z.number().positive(),

    deliveryDays: z.number().positive(),

    coverLetter: z.string().min(10)
});

module.exports = {
    bidSchema
};
