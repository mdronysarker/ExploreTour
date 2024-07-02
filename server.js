const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./index');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('Connected!'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App runing on port ${port}...`);
});
