const { async } = require('regenerator-runtime');
const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    // req.session.usuario = { nome: 'Luiz', logado: true };
    // console.log(req.session.usuario);
    // req.flash('error', 'hahaha');
    // req.flash('sucess', 'Olá mundo');
    // req.flash('info', 'Tanto faz');
    // console.log(req.flash('error'),req.flash('sucess'),req.flash('info'));
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
};
