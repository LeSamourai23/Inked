import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const router = Router();
const prisma = new PrismaClient();

const EMAIL_TOKEN_EXPIRATION = 1 * 60 * 60 * 1000;
const AUTH_TOKEN_EXPIRATION = 24 * 60 * 60 * 1000;
const JWT_SECRET = process.env.JWT_SECRET || "LMAO TOP LEVEL ENCRYPTION";

//Generate a random token for the email token
function generateEmailToken() {
    const random = Math.random().toString(36).substring(2, 10);
    return random;
};

function generateAuthToken(tokenId: number): string {
    const jwtPayload = { tokenId };

    return jwt.sign(jwtPayload, JWT_SECRET!, {
        algorithm: "HS256",
        noTimestamp: true
    })
};

// Create new user
//Generate the emailToken and send it to their email
router.post('/login', async (req, res) => {
    const { email } = req.body;

    //Generate token
    const emailToken = generateEmailToken();
    const expiration = new Date(new Date().getTime() + EMAIL_TOKEN_EXPIRATION);

    const createdToken = await prisma.token.create({
        data: {
            type: "EMAIL",
            emailToken,
            expiration,
            // A cool way to combine creating a new user or get the existing one
            user: {
                connectOrCreate: {
                    where: { email },
                    create: { email }
                }
            }
        }
    });

    res.status(200).json({ message: "Email Sent" });
});

//Validate the emailToken and generate the JWT Token
router.post('/authenticate', async (req, res) => {
    const { email, emailToken } = req.body;

    //Check if the token is valid
    const dbEmailToken = await prisma.token.findUnique({
        where: {
            emailToken
        },
        include: {
            user: true
        }
    })

    if (!dbEmailToken) {
        return res.status(401).json({ error: "Invalid Token" });
    }

    if (dbEmailToken.expiration < new Date()) {
        return res.status(401).json({ error: "Expired Token" });
    }

    if (dbEmailToken?.user?.email !== email) {
        return res.sendStatus(401);
    }

    //Validation for the token 
    const expiration = new Date(new Date().getTime() + AUTH_TOKEN_EXPIRATION);

    const apiToken = await prisma.token.create({
        data: {
            type: "API",
            expiration,
            user: {
                connect: {
                    email
                }
            }
        }
    });

    //Invalidating the email token
    await prisma.token.update({
        where: { id: dbEmailToken.id },
        data: { valid: false }
    });

    //Generate the JWT Token
    const authToken = generateAuthToken(apiToken.id);

    res.status(200).json({ message: `${authToken}` });
});

export default router;