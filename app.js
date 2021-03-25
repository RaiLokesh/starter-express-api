const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')



var cors = require('cors')
app.use(cors())

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error', (err)=>{
    console.log("err connecting", err)
})
require('./models/user')
require('./models/post')
require('./models/org')

app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT, ()=>{
    console.log("server is running on", PORT)
})