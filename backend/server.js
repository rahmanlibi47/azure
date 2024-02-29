const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const actorsRouter = require('./routes/actorsRoutes');
app.use('/actors', actorsRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});