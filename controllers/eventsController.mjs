// import db from '../data/data.mjs';
import Event from '../models/Event.mjs';



const getAllEvents = async (req, res) => {
   try {
      const events = await Event.find({ status: 'public' })
         .populate('user')
         .sort({ createdAt: 'desc' })
         .lean()

      res.send(events).status(200);
   } catch {
      console.error(err);
      res.status(500).send(err);
   }
};

const getEventById = async (req, res) => {
   try {
      let event = await Event.findById(req.params.id).populate('user').lean()
      if (!event) {
         res.status(404).send('404');
      }
      if (event.user._id != req.user.id) {
         res.status(404).send('404');
      } else {
         res.send(event).status(200);
      }
   } catch (err) {
      console.error(err)
      res.send('There was a problem rendering this event');
   }
};

const createEvent = async (req, res) => {
   try {
   //   req.body.user = req.user.id
     await Event.create(req.body)
     res.redirect('/events')
   } catch (err) {
     console.error(err);
     res.send('There was an error creating your event.');
   }
};

const updateEvent = async (req, res) => {
   res.send('hello');
};

const deleteEvent = async (req, res) => {
   res.send('hello');
};

export default { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent };