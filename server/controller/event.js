const Event = require('../models/event');

async function getEvents (_, res) {
  try {
    const events = await Event.find();
    res.status(200);
    res.json(events);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}

async function postEvents (req, res) {
  try {
    const { title, venue, date } = req.body;
    const event = Event.create({title, venue, date});
    res.status(200);
    res.json(event);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}

async function deleteEvent (req, res) {
  try {
    await Event.findByIdAndDelete({_id: req.params.id});
    res.sendStatus(204);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}


module.exports = {
  getEvents,
  postEvents,
  deleteEvent
};