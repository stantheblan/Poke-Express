require('dotenv').config()
const mOR = require('method-override')
const express = require('express')
const mongoose = require('mongoose')
const pokemon = require('./models/pokemon.js')
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}))
app.use(mOR('_method'))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/pokemon/seed/', (req, res) => {
    pokemon.create(
        [{name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}],
        (er, data) => {res.redirect('/pokemon')});
}) 

app.get('/', (req, res) => {
    res.send("Welcome to the <a href='/pokemon'>Pokemon</a> App!")
})

app.get('/pokemon', (req, res) => {
    // res.render('Index', {pokemon: pokemon})
    pokemon.find({}, (error, allPoke) => {
        res.render('Index', {
          pokemon: allPoke
        })
    })
}) 

app.get('/pokemon/new', (req, res) => {
    res.render('new')
})
app.post('/pokemon/', (req, res)=>{
    pokemon.create(req.body, (error, createdPoke)=>{
      res.redirect('/pokemon')
    })
})


app.get('/pokemon/:id', (req, res) => {
    pokemon.findById(req.params.id, (er, foundPoke) => {
        res.render('Show', {pokemon: foundPoke})
    })
})
app.delete('/pokemon/:id/', (req, res) => {
    pokemon.findByIdAndRemove(req.params.id, (er, foundPoke) => {
        res.redirect('/pokemon')
    })
})

app.get('/pokemon/:id/edit', (req, res) => {
    pokemon.findById(req.params.id, (er, foundPoke) => {
        if (!er)
        {
            res.render('Edit', {pokemon: foundPoke})
        }        
    })
})

app.put('/pokemon/:id/', (req, res)=>{
    pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (er, data)=>{
      res.redirect('/pokemon')
    })
})




//connect to mongo database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)) 