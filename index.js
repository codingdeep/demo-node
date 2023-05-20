const express = require("express");
const cors = require("cors")
const app =express();
app.use(cors("https://sslfjd"))
app.use(compression())
app.listen(300,()=>console.log("the server is running on http://localhost:300"))