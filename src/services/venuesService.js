const fs = require('fs');
const path = require('path');

const DATA_PATH = path.resolve(__dirname, 'venues.json');
const VENUE_DATA = fs.readFileSync(DATA_PATH, 'utf-8');
const VENUES = JSON.parse(VENUE_DATA);

module.exports = {
  VENUES
}