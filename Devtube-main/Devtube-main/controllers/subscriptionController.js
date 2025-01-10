const Subscription = require('@models/Subscription');
const Channel = require('@models/Channel');  // Assuming Channel model exists
const mongoose = require('mongoose');

// Function to get all subscriptions of a logged-in user
const getSubscriptions = async (req, res) => {
    try {
        const subscriberId = req.channel.id;  // Get the logged-in user's channel ID

        // Find all subscriptions where the subscriber is the logged-in user
        const subscriptions = await Subscription.find({ subscriber: subscriberId })
            .populate({
                path: 'channel',  // Populate the 'channel' field with the channel details
                select: 'handle logoURL description'  // Select only relevant fields
            });

        // Render a page with the subscriptions
        res.render('subscriptions', { subscriptions });
    } catch (error) {
        console.error('Error fetching subscriptions:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getSubscriptions
};
