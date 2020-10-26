require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/authRoute");
const msgRoutes = require("./routes/messageRoute");
const { loginRequired, checkCorrectUser } = require('./middleware/authMiddleware');

//env variables
const PORT = process.env.PORT || 7070;
const IP = process.env.IP;
//use packages
app.use(cors());
app.use(bodyParser.json());

//routes here
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", loginRequired, checkCorrectUser, msgRoutes);

app.get("/api/messages", loginRequired, async function(req, res, next){
    try {
        let messages = await db.Message.find().sort({createdAt: 'desc'}).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(messages);
    } catch(error){
        return next(error);
    }
});

//error handling
app.use(function(req, res, next){
    let error = new Error("Not Found")
    error.status = 404;
    next(error);
})

//formats error messages in a readable json
app.use(errorHandler);

// to start server type 'node index.js' or 'npx nodemon'
// activate server
app.listen(PORT, IP, function(){
    console.log(`Server is running and listening intently on PORT: ${PORT} and IP: ${IP}`);
})