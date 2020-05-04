const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  events: {
    notes: String,
    event_type: String,
    date: String,
  },
});

const leadsSchema = new Schema({
  leads: {
    id: Number,
    company: String,
    link: String,
    position: String,
    cv: String,
    cl: String,
    events: [eventsSchema],
  },
});

const userSchema = new Schema({
  username: String,
  leads: [leadsSchema],
});
