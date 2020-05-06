const mongoose = require('mongoose');

mongoose.connect(
  // `${process.env.MONGO_URI}`,
  'mongodb+srv://mariodandrea:9QH3c9Jn3u2fotjy@cluster0-5k0f4.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('successful connection');
    }
  }
);

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  events: {
    notes: String,
    event_type: String,
    date: String,
    reminder_in: Number,
  },
});

const events = mongoose.model('events', eventsSchema);

const leadsSchema = new Schema({
  leads: {
    id: Number,
    company: String,
    recruiter: String,
    link: String,
    position: String,
    cv: String,
    cl: String,
    notes: String,
    events: [eventsSchema],
  },
});

const leads = mongoose.model('leads', leadsSchema);

const userSchema = new Schema({
  username: String,
  leads: [leadsSchema],
});

const user = mongoose.model('user', userSchema);

module.exports = { user, leads, events };
