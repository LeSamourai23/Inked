import { Router } from 'express';

const router = Router();

//Entry CRUD

//Create Entry
router.post('/', (req, res) => {
    res.status(501).json({error: 'Not Implemented'});
});

//List Entry
router.get('/', (req, res) => {
    res.status(501).json({error: 'Not Implemented'});
});

//Get Entry
router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    res.status(501).json({error: `Not Implemented: ${id}`});
});

//Update Entry
router.put('/:id', (req, res) => {
    const {id} = req.params;
    
    res.status(501).json({error: `Not Implemented: ${id}`});
});

//Delete Entry
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    
    res.status(501).json({error: `Not Implemented: ${id}`});
});

export default router;