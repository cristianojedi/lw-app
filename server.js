// configurações do express server
const express = require('express');
const path = require('path');

const app = express();

// configurações do diretório da aplicação
app.use(express.static(__dirname + '/dist/lw-frontend'));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname+ '/dist/lw-frontend/index.html'));
});

// startar o app na porta 8080
app.listen(process.env.PORT || 8080);
