const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/UsuarioRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoutes);

const PORT = 3011;
app.listen(PORT, () => console.log(`Usuário service rodando na porta ${PORT}`));