const express = require('express');
const router = express.Router();

// declare axios for making http requests ----test
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

const jsonfile = require('jsonfile');
const LSAFile = './src/app/data/LSA.json';
const CSSAFile = './src/app/data/CSSA.json';

/* GET api listing. */
router.get('/', (req, res) => {

    res.send('/posts, /LSAQuestions');
});

router.get('/LSAQuestions', (req, res) => {
    var returnData = jsonfile.readFileSync(LSAFile);
    res.send(returnData);
});

router.get('/CSSAQuestions', (req, res) => {
    var returnData = jsonfile.readFileSync(CSSAFile);
    res.send(returnData);
});

// Get all posts
router.get('/posts', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`${API}/posts`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(error => {
            res.status(500).send(error)
        });
});

module.exports = router;