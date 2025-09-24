const express = require('express');
const cors = require('cors');
const FiltroRoutes = require('./routes/filtroRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/filtro', FiltroRoutes);

const PORT = 3010;
app.listen(PORT, () => console.log(`Filtro service rodando na porta ${PORT}`));
