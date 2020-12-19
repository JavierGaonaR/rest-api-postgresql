const { pool } = require("./index.controller");

const getUsuarios = async (req, res) => {
    const response = await pool.query('SELECT * FROM public."Usuario"');
    res.status(200).json(response.rows);
};

const getUsuario = async (req, res) => {
    const response = await pool.query('Select * FROM public."Usuario" WHERE ...')
}

const postUsuario = async (req, res) => {
    res.send('Usuario creado.');

    const { usuario, contraseña } = req.body;
    const response = await pool.query('INSERT INTO public."Usuario" (usuario, contraseña) VALUES ($1, $2)', [usuario, contraseña]);
    // res.end({
    //     message: "Usuario Added Succesfully",
    //     data: {
    //         user: { usuario, contraseña }
    //     }
    // });
}

module.exports = {
    getUsuarios,
    postUsuario
}