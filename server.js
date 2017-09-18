const express = require('express')  
const app = express()  
const port = 80

var path = require('path')
app.use(express.static(path.join(__dirname, '')));

app.get('/', (request, response) => {  
  response.sendFile(__dirname +'/index-developer-vertical-scroll.html');
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})