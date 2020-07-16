const express = require('express');

const app = express();

app.use(express.static('./dist/webdevelopmentassignment'));


app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/webdevelopmentassignment/'}
  );
  });

  app.listen(process.env.PORT || 8080);
