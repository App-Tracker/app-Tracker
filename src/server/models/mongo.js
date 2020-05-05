const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URI}`);

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  events: {
    notes: String,
    event_type: String,
    date: String,
  },
});

const events = mongoose.model('events', eventsSchema);

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

const leads = mongoose.model('leads', leadsSchema);

const userSchema = new Schema({
  username: String,
  leads: [leadsSchema],
});

const user = mongoose.model('user', userSchema);

export { user, leads, events };
