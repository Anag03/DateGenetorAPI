const { createServer } = require('vercel')
const moment = require('moment-timezone')

module.exports = createServer((req, res) => {
  const { start = 172800000, end = 176400000 } = req.query // Default values: 48 hours and 48 hours + 30 minutes in milliseconds
  const startDate = moment().tz('Europe/Dublin').add(start, 'milliseconds').format('YYYY-MM-DD HH:mm:ss')
  const endDate = moment().tz('Europe/Dublin').add(end, 'milliseconds').format('YYYY-MM-DD HH:mm:ss')
  res.json({ start: startDate, end: endDate })
})
