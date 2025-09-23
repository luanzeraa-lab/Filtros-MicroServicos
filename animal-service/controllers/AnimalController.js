const animalModel = require('../models/AnimalModel');

exports.listarAnimais = (req, res) => {
  const { userId, porte } = req.query;
  let resultado = animais;

  if (userId) {
    resultado = resultado.filter(a => a.userId === userId);
  }
  if (porte) {
    resultado = resultado.filter(a => a.porte.toLowerCase() === porte.toLowerCase());
  }

  res.json(resultado);
};
