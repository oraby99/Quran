const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
// routes
app.use('/quran' , require('./routes/quran'))
const PORT = process.env.PORT || 5000
app.listen(PORT , console.log("server is running..."))