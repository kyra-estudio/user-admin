const mongoose = require('mongoose');
const DBNAME = 'store';



mongoose
  .connect(`mongodb://localhost/${DBNAME}`)
  .then(() => console.log('Conexión establecida'))
  .catch((err) => console.log(err));
