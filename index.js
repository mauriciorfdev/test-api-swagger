const express = require('express');
const jediRoutes = require('./routes/api/jediRoutes');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', jediRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}...`);
});
