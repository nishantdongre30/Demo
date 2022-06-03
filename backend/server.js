const express = require('express')

const app = express()

app.get('/',(req,res) =>{
    res.status(200).json({
        Name: "Nishant Dongre",
        Age: 21
    })
})

app.listen(5000,console.log("server started on port 5000"))
