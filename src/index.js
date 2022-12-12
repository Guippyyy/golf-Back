const express = require('express');
const server = express()

server.use((req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 3001
server.listen(PORT), () => {
    console.log('listening on port ' + PORT)
}