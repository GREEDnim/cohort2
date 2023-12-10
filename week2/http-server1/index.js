const express = require('express')
const app = express()
const todoRoutes=require('./todoRoutes')
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/todo',todoRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
