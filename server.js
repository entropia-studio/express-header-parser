const express = require("express")

var app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'))

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami",(request,response) => {

    var jsonResponse = {}
    
    jsonResponse = Object.assign({
        "ipaddress": request.ip,
        "language" : request.headers["accept-language"],
        "software" : request.headers["user-agent"]
    })
    response.status(200).json(jsonResponse)
})

app.listen(8080,'localhost')

