const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000

const app = express();
const publicPath = path.join(__dirname, '..', '/public');

// static takes the path to public folder

app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => {
  console.log(`server is up!`);
  
})