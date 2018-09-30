require('./config/config')
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get usuario')
})

app.post('/usuario', function(req, res) {
    let body = req.body

    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            m: 'El nombre es necesario'
        })
    }
    res.json(body)
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id
    res.json(id)
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 3000');
})