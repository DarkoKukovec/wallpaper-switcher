const { getMinutes, getRandom } = require('./utils');
const list = require('./list');
const switchWallpaper = require('./switch');

console.log(list)

// find current time
const current = getMinutes(new Date());

// schedule intervals
list.forEach(({ start, paths }) => {
  const startTime = start > current ? start : start + 60 * 24;
  const offset = (startTime - current) * 60 * 1000;
  const images = paths.slice();
  setTimeout(() => {
    const selected = images[getRandom(images.length)];
    switchWallpaper(selected);

    setInterval(() => {
      const selected = images[getRandom(images.length)];
      switchWallpaper(selected);
    }, 24 * 60 * 60 * 1000);
  }, offset);
  console.log('start', startTime - current, offset)
});

// find current wallpaper
const currentItem = list.reduce((selected, curr) => {
  if (curr.start < current && curr.start > selected.start) {
    return curr;
  } else if (curr.start > current && curr.start > selected.start && selected.start > current) {
    return curr;
  }
  return selected;
});

const selected = currentItem.paths[getRandom(currentItem.paths.length)];
switchWallpaper(selected);