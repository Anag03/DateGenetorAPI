const express = require('express');
const app = express();
const moment = require('moment-timezone');

// Parse JSON requests
app.use(express.json());

// Generate a random date within the specified range
app.get('/random_date', (req, res) => {
  // Get current date/time in the 'Europe/Dublin' timezone
  const currentDate = moment().tz('Europe/Dublin');

  // Parse start and end date offsets from request query parameters
  const startOffset = parseInt(req.query.start) || 0;
  const endOffset = parseInt(req.query.end) || 0;

  // Calculate start and end date/time based on current date/time and offsets
  const startDate = new Date(currentDate.valueOf() + startOffset);
  const endDate = new Date(currentDate.valueOf() + endOffset);

  // Generate a random date/time between start and end dates
  const randomDate = new Date(startDate.valueOf() + Math.random() * (endDate.valueOf() - startDate.valueOf()));

  // Format start and end date/time as ISO strings with timezones
  const startDateTime = startDate.toISOString().substring(0, 10) + ' ' + startDate.toLocaleTimeString('en-GB');
  const endDateTime = endDate.toISOString().substring(0, 10) + ' ' + endDate.toLocaleTimeString('en-GB');

  // Send the start and end date/time as a JSON response
  res.send({
    startDateTime: startDateTime,
    endDateTime: endDateTime,
  });
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
