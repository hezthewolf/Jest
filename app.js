const express = require('express')
const app = express()
const people = require('./route/people')
const products = require('./route/products')
const login = require('./route/auth')

// Static assets

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/people', people)
app.use('/api/products', products)
app.use('/login', login)




module.exports = app;