const express = require('express');
const router = express.Router({ mergeParams: true }); //mergeParams allows access to id inside router

const { createMessage, getMessage, deleteMessage } = require("../handlers/messageHandler");

//prefix /api/users/:id/messages
router.route("/").post(createMessage);

router.route("/:message_id").get(getMessage).delete(deleteMessage);

module.exports = router;