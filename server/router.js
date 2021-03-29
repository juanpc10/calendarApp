const router = require('express').Router();
const controller = require('./controller/event');


router.get('/events', controller.getEvents);
router.post('/events', controller.postEvents);
router.delete('/events/:id', controller.deleteEvent);


module.exports = router;