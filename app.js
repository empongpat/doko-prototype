const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('build'))

app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log('Server is listening on port:', PORT)
})

