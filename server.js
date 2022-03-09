const express = require('express')
const pokemon = require('./models/pokemon')
const app = express()
const port = 3000

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
}) 

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon[req.params.id]})
})

app.listen(port, () => console.log(`Listening on port: ${port}`)) 