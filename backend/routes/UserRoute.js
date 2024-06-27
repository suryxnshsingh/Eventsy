const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/UserController');
const { protect } = require('../middlewares/authMid');

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

module.exports = router;
