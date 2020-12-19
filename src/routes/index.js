const { Router } = require('express');
const router = Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

const { getUsuarios, postUsuario } = require('../controller/usuario.controller'); 

router.get('/usuarios', getUsuarios);
router.post('/usuario', postUsuario);

module.exports = router;