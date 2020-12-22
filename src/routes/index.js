const { Router } = require('express');
const router = Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

const usuarioController = require('../controller/usuario.controller'); 

router.route('/usuarios')
    .get(usuarioController.view)
    .post(usuarioController.new);

router.route('/usuario/:id')
    .get(usuarioController.index)
    .put(usuarioController.update)
    .delete(usuarioController.delete);


module.exports = router;