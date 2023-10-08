const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, submitInfo, updateName, deleteName} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/submitInfo", submitInfo)
app.put(`/api/submitInfo/:firstName`,updateName)
app.delete("/api/submitInfo/:deleteInput",deleteName)


app.listen(4000, () => console.log("Server running on 4000"));
