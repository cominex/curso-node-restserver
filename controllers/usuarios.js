

const {response, request} = require('express');



const usuariosGet = function (req = request, res = response) {
    
    const {q, nombre, apikey} = req.query;
    
    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = function (req, res = response) {
    
    const {id} = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPost = function (req, res = response) {

    const body = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        body
    });
}

const usuariosPatch = function (req, res = response) {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = function (req, res = response) {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}


module.exports = { usuariosGet, usuariosPut, usuariosPost, usuariosPatch, usuariosDelete };