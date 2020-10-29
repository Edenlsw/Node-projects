// code for external libraries
const express = require('express');
const cors = require('cors');

// setup for Express
const app = express()
app.use(cors())

const eden = {
    firstName: 'Eden',
    lastName: 'Smith-Wint',
    faveFood: 'Fruit- mainly grapes',
    faveColour: 'Purple',
    Occupation: 'Civil Servant',
    
};

const facts = [
    'my name is eden',
    'i live in brum',
    'i hope the facts works'
]
    


// routes (include a banana route)

app.get('/', (req, res) => {
    res.json({ message: 'Eden is here, and we hope the code works'})
});

app.get('/about-me', ( req, res) => {
    res.json(eden)
});

app.get ('/banana', (req, res) => {
    res.json({ message: 'The yellow fruit'})
});

// random fact generate
app.get('/woop', (req, res) => {
    const randomIndex = Math.floor(Math.random 
        () * facts.length)
    const randomFact = facts[randomIndex]
    res.json ({
        
        fact:randomFact
    })    
})

// code to start the server 

app.listen(2019, () => {
    console.log('You did it, it is working, woop woop !!!!!')
})

