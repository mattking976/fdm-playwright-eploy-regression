// this is the zod file for checking required env vars are present.
import dotenv from 'dotenv';
import z from 'zod';

dotenv.config();

const envSchema = z.object({
    eployUsername: z.string(),
    eployPassword: z.string(),
    eployENV: z.string(),
    sufaUsername: z.string(),
    sufaPassword: z.string(),
    sufaENV: z.string(),
});

const envVars = envSchema.parse({
    eployUsername: process.env.eployUsername,
    eployPassword: process.env.eployPassword,
    eployENV: process.env.eployENV,
    sufaUsername: process.env.sufaUsername,
    sufaPassword: process.env.sufaPassword,
    sufaENV: process.env.sufaENV,
});

export default envVars;
