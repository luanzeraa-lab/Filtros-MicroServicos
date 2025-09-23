const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    idade: {type: String},
    raca: {type: String, required: true},
    sexo: {type: String, required: true},
    porte: {type: String, required:true},
    peso: {type: String}, 
    observacoes: {type: String},
    castracao: {type: Boolean, required:true},
    imagem: {type: String},
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
});

const Animal = mongoose.model("Animal", AnimalSchema)

module.exports = Animal;