const express = require('express');
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/EventController');
const { protect } = require('../middlewares/authMid');

const router = express.Router();

router.post('/', protect, createEvent);
router.get('/', getEvents);
router.get('/:id', getEventById);
router.put('/:id', protect, updateEvent);
router.delete('/:id', protect, deleteEvent);

module.exports = router;