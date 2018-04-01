const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('build'))

app.get('/', (req, res) => {
  return res.sendFile('build/index.html')
})

app.listen(PORT, () => {
  console.log('Server is listening on port:', PORT)
})