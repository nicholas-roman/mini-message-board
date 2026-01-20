const { Router } = require("express");
const messages = require('../data/messages')

const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form", { title: 'Mini Messageboard | New'});
});

newRouter.post("/", (req, res) => {
    const { name, message } = req.body;

    messages.push({
        text: message,
        user: name,
        added: new Date()
    })

    res.redirect('/');
});

module.exports = newRouter;