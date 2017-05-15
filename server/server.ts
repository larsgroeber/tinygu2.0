import express = require('express');
import path = require('path');

let app = express();

app.use('/', express.static(path.join(__dirname, '../dist/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || 3000;

app.set('port', port);

app.listen(port, () => {
  console.log(`Listening for http requests on port ${port}`);
});
