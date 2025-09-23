const express = require('express');
const cors = require('cors');
const animalRoutes = require('./routes/animalRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/animais', animalRoutes);

const PORT = 3012;
app.listen(PORT, () => console.log(`Animal service rodando na porta ${PORT}`));