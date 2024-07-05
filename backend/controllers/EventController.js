const Event = require ('../models/Event')

const createEvent = async (req,res)=>{
    const {title, description, date, location, entry} = req.body;
    try{
        const event = new Event({ title, description, date, location, entry, creator : req.user._id})
        await event.save();
        res.status(201).json({event})
    } catch(error){
        res.status(500).json({
            msg : "Server Error3"
        })
    }
}

const getEvents = async (req, res) => {
    try {
      const events = await Event.find().populate('creator', 'username email');
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};

const getEventById = async (req, res) => {
    try {
      const event = await Event.findById(req.params.id).populate('creator', 'username email');
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};

const updateEvent = async (req, res) => {
    const { title, description, date } = req.body;
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      if (event.creator.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }
      event.title = title || event.title;
      event.description = description || event.description;
      event.date = date || event.date;
      await event.save();
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const deleteEvent = async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      if (event.creator.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }
      await event.remove();
      res.json({ message: 'Event removed' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  module.exports = { createEvent, getEvents, getEventById, updateEvent, deleteEvent };