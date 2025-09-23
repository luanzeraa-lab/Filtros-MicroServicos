const UsuarioModel = require('../models/UsuarioModel')

exports.listarUsuarios = (req, res) => {
  const { cidade } = req.query;
  let resultado = usuarios;

  if (cidade) {
    resultado = usuarios.filter(u => u.endereco.cidade.toLowerCase() === cidade.toLowerCase());
  }

  res.json(resultado);
};
