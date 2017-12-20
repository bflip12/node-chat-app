const express = require('express');
const path = require('path');

var app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

console.log(__dirname + '/../public');
console.log(publicPath);

app.listen(3000, () => {
  console.log(`server is up on port ${port}`)
});
