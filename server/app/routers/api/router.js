const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const moderatorRouter = require("./moderator/router");

router.use("/moderator", moderatorRouter);

const parentRouter = require("./parent/router");

router.use("/parent", parentRouter);

const childRouter = require("./child/router");

router.use("/child", childRouter);

/* ************************************************************************* */

module.exports = router;
