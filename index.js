const express = require('express');
const jediRoutes = require('./routes/api/jediRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', jediRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}...`);
});
