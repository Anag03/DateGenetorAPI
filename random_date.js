const express = require('express');
const app = express();
const moment = require('moment-timezone');

app.get('/random_date', (req, res) => {
  const start_date = moment().tz('Europe/Dublin');
  const end_date = moment().tz('Europe/Dublin');
  const start_offset = parseInt(req.query.start) || 0;
  const end_offset = parseInt(req.query.end) || 0;
  const random_date = new Date(start_date.valueOf() + start_offset + Math.random() * (end_date.valueOf() - start_date.valueOf() + end_offset));
  const start_date_modified = new Date(start_date.valueOf() + start_offset);
  const end_date_modified = new Date(end_date.valueOf() + end_offset);
  const start_datetime = start_date_modified.toISOString().substring(0, 10) + ' ' + start_date_modified.toLocaleTimeString('en-GB');
  const end_datetime = end_date_modified.toISOString().substring(0, 10) + ' ' + end_date_modified.toLocaleTimeString('en-GB');
  res.send({
    start_datetime: start_datetime,
    end_datetime: end_datetime,
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
