import express from 'express';

const router = express.Router();

import {
    getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario,
    listUsuario
} from '../controllers/usuarioControllers.js';

router.get('/usuario', listUsuario)
router.get('/usuario/:id', getUsuario);
router.put('/usuario/:id', updateUsuario);
router.post('/usuario', saveUsuario);
router.delete('/usuario/:id', deleteUsuario);

export default router;