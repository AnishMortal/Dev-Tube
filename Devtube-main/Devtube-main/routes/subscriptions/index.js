const express = require('express');
const { getSubscriptions } = require('@controllers/subscriptionController');
const { isloggedIn } = require('@lib/middlewares');
const router = express.Router();

// Route to fetch and display subscriptions for the logged-in user
router.get('/subscriptions', isloggedIn, getSubscriptions);

module.exports = router;
