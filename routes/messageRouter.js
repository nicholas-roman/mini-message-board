const { Router } = require("express");
const messages = require('../data/messages')

const messageRouter = Router();

messageRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const message = messages[id]

    if (message) {
        res.render("message", { title: "Mini Messageboard | Message", message: message });
    } else {
        res.status(400).send('Message not found');
    }    
});

module.exports = messageRouter;