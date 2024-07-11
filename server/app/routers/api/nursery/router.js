const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import nursery-related actions
const { browse, read, add } = require("../../../controllers/nuseryActions");

// Route to get a list of nurseries
router.get("/", browse);

// Route to get a specific nursery by ID
router.get("/:id", read);

const hashPassword = require("../../../services/HashedPassword");

// Route to add a new nursery
router.post("/", hashPassword, add);

const login = require("../../../controllers/authentificationActions");

router.post("/login", login);

/* ************************************************************************* */

module.exports = router;
