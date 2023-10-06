const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, submitInfo, addUserInfo } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/submitInfo", submitInfo)
app.put("/api/username", addUserInfo)
app.delete("/api/delete")

app.listen(4000, () => console.log("Server running on 4000"));
