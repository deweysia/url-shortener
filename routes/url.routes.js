const urls = require('../controllers/url.controller')
const router = require("express").Router();

module.exports = app => {

    // Create a new Tutorial
    router.post("/", urls.create);

    // Retrieve all Tutorials
    router.get("/", urls.findAll);

    // Retrieve all published Tutorials
    router.get("/published", urls.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", urls.findOne);

    // Update a Tutorial with id
    router.put("/:id", urls.update);

    // Delete a Tutorial with id
    router.delete("/:id", urls.delete);

    // Delete all Tutorials
    router.delete("/", urls.deleteAll);

    app.use('/url', router);
};