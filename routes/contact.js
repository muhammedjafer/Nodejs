const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController'); 

router.route('/').get(contactController.getContact);

router.route('/:id').get(contactController.ViewContact);

router.route('/').post(contactController.createContact);

router.route('/:id').delete((req, res) => {
    $cal = 1 + 1;
    res.json({message: 'Hello world delete!!',
    'math': $cal});
});

module.exports = router;