const path = require('path');
const { getSunrise, getSunset } = require('sunrise-sunset-js');
const { getMinutes } = require('./utils');

const sunrise = getMinutes(getSunrise(45.8, 16));
const sunset = getMinutes(getSunset(45.8, 16));

console.log('sunrise', sunrise, 'sunset', sunset)

module.exports = [{
  start: sunrise - 30,
  filenames: ['0.jpg', '1.jpg'],
}, {
  start: sunrise + 60,
  filenames: ['2.jpg', '3.jpg', '4.jpg'],
}, {
  start: Math.round((sunrise + sunset) / 2),
  filenames: ['5.jpg', '6.jpg', '7.jpg'],
}, {
  start: sunset - 60,
  filenames: ['8.jpg', '9.jpg'],
}, {
  start: sunset,
  filenames: ['10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg'],
}, {
  start: sunset + 60,
  filenames: ['20.jpg', '22.jpg'],
}, {
  start: sunset + 120,
  filenames: ['23.jpg', '24.jpg'],
}].map(({ start, filenames }) => ({
  start,
  paths: filenames.map((filename) => path.join(__dirname, 'wallpapers', filename)),
}));