import express from 'express';
import * as ctrl from '../controllers/mainController.js';

const router = express.Router();
router.get('/', (req, res) => {
    res.render('index');
})            
export default router;
