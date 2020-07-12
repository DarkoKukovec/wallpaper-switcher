# Wallpaper switcher

As a fan of the [Firewatch](https://www.firewatchgame.com/) game, I had an idea of an automatic wallpaper switcher that applies a wallpaper based on the time of the day.

![A scene from Firewatch](cover.jpg)

## Setup, part 1

1. Find a set of your new wallpapers and add them to the `wallpapers` folder
2. Update your coordinates in `list.js` on lines 5 and 6
3. Update the `list.js` with the desired order and slots. The start value is the minutes since midnight and you can use `sunrise` and `sunset` values to sync the change with the daylight.
4. Install all necessary libraries:

> npm install
> npm install -g forever

## Start

> forever start ./scheduler.js

## Stop

> forever stop ./scheduler.js

## Setup, part 2: Set the wallpaper (macOS)

Since macOS doesn't allow changing wallpapers on all spaces at once, there is a hack that needs to be applied after the script has been started the first time:

1. Go to your Desktop & screensaver settings
2. Add the wallpaper folder as one of the available folders
3. For every desktop, select the "active.jpg" (last item) as your current wallpaper

## TODO

All times are calculated on the start of the run, which means that sunrise and sunset values will go out of sync. This is good enough for v1 since the error will be negligible in the first few days, assuming you reboot your device every now and then.