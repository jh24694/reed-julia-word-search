import express from 'express';
import * as ctrl from '../controllers/mainController.js';
import * as auth from '../controllers/authController.js';


const router = express.Router();
router.get('/', (req, res) => {
    res.render('index');
})
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/register', auth.register);
router.post('/register', auth.verifyRegister);
router.get('/logout', auth.logout);

export default router;
