const express = require("express")

var app = express()

app.use(express.static('public'))

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami",(request,response) => {

    var jsonResponse = {}
    console.log("language",request.headers["accept-language"])
    jsonResponse = Object.assign({
        "ipaddress": request.ip,
        "language" : request.acceptsLanguages,
        "software" : request.headers["user-agent"]
    })
    response.status(200).send(jsonResponse)
})

app.listen(8080,'localhost')

