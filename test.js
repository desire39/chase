const express = require('express');

const app = express();


app.get('/test', (req, res) => {
  res.status(200).json({
    status: 'sucesss',
    message: 'testing sucessful!',
  });
  
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));
