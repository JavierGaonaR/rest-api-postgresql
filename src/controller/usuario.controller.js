const { pool } = require("./index.controller");

exports.view = async function (req, res) {
    const response = await pool.query('SELECT * FROM public."Usuario"');
    res.status(200).json(response.rows);
};


exports.index = async function (req, res) {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM public."Usuario" WHERE "idUsuario" = $1', [id]);
    if (response.rows.length > 0) {
        res.status(200).json(response.rows);
    } else {
        res.json( {
            message: "Usuario not found"
        });
    }
}


exports.new = async function (req, res) {
    const { usuario, contraseña } = req.body;
    const response = await pool.query('INSERT INTO public."Usuario" (usuario, contraseña) VALUES ($1, $2)', [usuario, contraseña], (err, result) => {
        if (err) {
          return console.error('Error executing query', err.stack)
        }
        res.json({
            message: "Usuario Added Succesfully",
            data: {
                user: { usuario, contraseña }
            }
        });
      });
}


exports.update = async function (req, res) {
    const idUsuario = req.params.id
    const { usuario, contraseña } = req.body;
    const response = await pool.query('UPDATE public."Usuario" SET "usuario" = $1, "contraseña" = $2 WHERE "idUsuario" = $3', [usuario, contraseña, idUsuario], (err, result) => {
        if (err) {
          return console.error('Error executing query', err.stack)
        }
        res.json({
            message: "Usuario Updated Succesfully",
            data: {
                user: { idUsuario, usuario, contraseña }
            }
        });
      });
}


exports.delete = async function (req, res) {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM public."Usuario" WHERE "idUsuario" = $1', [id], (err, result) => {
        if (err) {
          return console.error('Error executing query', err.stack)
        }
        res.json({
            message: "Usuario Deleted Succesfully"
        });
      });
}
