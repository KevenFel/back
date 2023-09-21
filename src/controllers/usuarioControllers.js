import { pool } from '../db.js';

const listUsuario = async (req, res) => {
    try {
        const usuario = await pool.query('SELECT * FROM USUARIO');
        res.send(usuario.rows)
    } catch (error) {
        console.log(error);
    }
}

const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await pool.query('SELECT * FROM USUARIO WHERE ID = $1', [id]);
        res.send(usuario.rows)
    } catch (error) {
        console.log(error);
    }
};

const saveUsuario = async(req, res) => {
    try {
        const { nombre, email, password, activo } = req.body;
        const { id } = req.params;
        const usuario = await pool.query('INSERT INTO USUARIO(nombre, password, activo, email) VALUES ($1, $2, TRUE, $3);', [nombre, password, email]);
        res.send(usuario.rows);
    }
    catch (e) {
        res.send(e)
    }
};

const updateUsuario = async (req, res) => {
    try {
        console.log("DATOA: " + req.params);
        const { nombre, email, password, activo } = req.body;
        const { id } = req.params;
        const usuario = await pool.query('UPDATE USUARIO SET nombre=$1, password=$2, activo=$3, email=$4 WHERE ID = $5', [nombre, password, activo, email, id]);
        res.send(usuario.rows);
    }
    catch (e) {
        res.send(e)
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await pool.query('DELETE FROM USUARIO WHERE ID = $1', [id]);
        res.status(200).json({ message: 'Borrado exitosamente' });
        res.json(usuario.rows);
        res.send("Borrar un usuario");
    } catch (error) {
        console.log(error);
    }
};


export {
    getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario,
    listUsuario
};
