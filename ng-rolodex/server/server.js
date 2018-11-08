const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8989
const bp = require('body-parser');
const path = require('path')
const cors = require('cors')
const Contacts = require('./db/models/Contacts')
const Users = require('./db/models/Users')

app.use(cors())
app.use(express.static(path.join(__dirname, '../build')))
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json())


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
