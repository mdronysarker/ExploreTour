const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'hello from server side !', app: 'exploreTour' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App runing on port ${port}...`);
});
