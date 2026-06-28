const express = require('express');
require('dotenv').config();


const app = express(); //app express
const port = process.env.PORT || 3000; //port
const hostname = process.env.HOST_NAME;

const configViewEngine =  require('./config/viewEngine');

const webRouter = require('./routes/web');

configViewEngine(app)
app.use('/trangchu', webRouter);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
