require('./database/sync');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const crucerorouter = require('./routers/crucerorouter');
const usuariorouter = require('./routers/usuariorouter');
const camaroterouter = require('./routers/camaroterouter');
const reservarouter = require('./routers/reservarouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log('The application is running on port ' + port); 
});

app.use('/api', crucerorouter);
app.use('/api', usuariorouter);
app.use('/api', camaroterouter);
app.use('/api', reservarouter);
