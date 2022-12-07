require('./services/mongo')
const express = require('express')
const app = express()
const path = require('path')


app.use (
    express.urlencoded({
        extended: true
    }),
)


app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'))


app.get('/cardapio', (req,res) =>{
    res.status(200)
    res.sendFile(path.join(__dirname, '..', 'cardapio', 'src','cardapio','cardapio.html'))
})



app.listen(3000)