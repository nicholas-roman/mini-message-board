const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

app.use("/new", newRouter);
app.use("/message", messageRouter)
app.use("/", indexRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Project: Mini Message Board is running on Port: ${PORT}`);
})