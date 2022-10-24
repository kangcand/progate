const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

// Tambahkan route untuk halaman top


app.listen(3000);
