const wallpaper = require('wallpaper');
const fs = require('fs');
const path = require('path');

module.exports = async function switchWallpaper(image) {
  const dest = path.join(__dirname, 'wallpapers', 'active.jpg')
  fs.copyFileSync(image, dest)
  await wallpaper.set(image, {
    screen: 'all',
    scale: 'fill',
  });
  await wallpaper.set(dest, {
    screen: 'all',
    scale: 'fill',
  });
};