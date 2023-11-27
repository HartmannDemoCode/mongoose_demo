import express from 'express';
const router = express.Router();
const persons = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Josh Doe' },
];
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', (req, res) => {
    res.json({ persons: persons });
});
export default router;
