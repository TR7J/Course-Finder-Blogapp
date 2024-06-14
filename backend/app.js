/* IMPORTS */
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const auth = require('./routes/auth')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')



/* Initialize express */
const app = express()

/* Connecting to mongodb database */
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to database'))
.catch((err) => console.log('Not Connected to database', err))

/* MIDDLEWARE FOR PARSING JSON DATA */
app.use(express.json())

/* MIDDLEWARE FOR COOKIE-PARSER */
app.use(cookieParser())

/* MIDDLEWARE FOR PARSING FORM DATA */
app.use(express.urlencoded({extended: false}))


/* CORS MIDDLEWARE */ 
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

/* MIDDLEWARE FOR ROUTES*/
app.use('/', auth)


/* CREATING A PORT */
app.listen(4000, ()=>{
    console.log("Server is listening on port 4000")
})