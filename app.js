const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Tu mama en calzones')
})


app.listen(3000, console.log("Server is running..."))
