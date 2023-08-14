import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

//Create Entry
router.post('/', async (req, res) => {
    const { content, image } = req.body;

    //@ts-ignore
    const user = req.user;

    try {
        const result = await prisma.entry.create({
            data: {
                content,
                image,
                userId: user.id
            },
            include: {
                user: true
            }
        });

        res.json(result);
    } catch (e) {
        res.status(400).json({ error: "Error" });
    }

});

//List Entries
router.get('/', async (req, res) => {
    const allEntries = await prisma.entry.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                    image: true
                }
            }
        }
    })

    res.json(allEntries);
});

//Get One Entry
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const entry = await prisma.entry.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            user: true
        }
    });

    if (!entry) {
        return res.status(404).json({ error: "Entry not found" });
    };

    res.json(entry);
});

//Update Entry
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        const result = await prisma.entry.update({
            where: { id: Number(id) },
            data: { content }
        })

        res.json(result);
    } catch {
        res.status(404).json({ error: "Entry not found" });
    }
});

//Delete User
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    await prisma.entry.delete({ where: { id: Number(id) } })

    res.sendStatus(200);
});

export default router;