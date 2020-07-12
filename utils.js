module.exports = {
  getMinutes(date) {
    return date.getHours() * 60 + date.getMinutes();
  },
  getRandom(count) {
    return Math.floor(Math.random() * count);
  }
}