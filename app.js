const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./routers/main');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( express.static(path.join(__dirname, 'public')) );
app.use('/', mainRoutes);

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});