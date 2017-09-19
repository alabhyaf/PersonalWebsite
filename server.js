const express = require('express')  
const app = express()  
const port = 3000

var path = require('path')
app.use(express.static(path.join(__dirname, '')));

app.get('/', (request, response) => {  
  response.sendFile(__dirname +'/index-developer-vertical-scroll.html');
})

app.get('/twitter', (request, response) => {  
  response.sendFile(__dirname +'/case-study-big-data-project.html');
})

app.get('/kafka-samza', (request, response) => {  
  response.sendFile(__dirname +'/case-study-kafka-samza-project.html');
})

app.get('/hetro-backends', (request, response) => {  
  response.sendFile(__dirname +'/case-study-social-network.html');
})
app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})