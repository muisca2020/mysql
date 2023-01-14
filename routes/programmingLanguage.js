const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguage');

router.get('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.read(req.query.page));
    } catch (error) {
        console.error("Este es el error" + error.message);
        next(error);
    }
});

router.post('/', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body));
    } catch (error) {
        console.error("Este es el error" + error.message);
        next(error);
    }
});

router.put('/', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.update(req.body.id, req.body));
    } catch (error) {
        console.error("Este es el error" + error.message);
        next(error);
    }
});

router.delete('/', async function(req, res, next) {
    try {
        res.json(await programmingLanguages.borrar(req.body.id));
    } catch (error) {
        console.error("Este es el error" + error.message);
        next(error);
    }
});

module.exports = router;