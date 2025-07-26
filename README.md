# CS 396 Intro to Web Development Lab 4
The intended interactive features are a theme switcher and modal images (click to see an enlarged view).
The theme toggle is in the top right corner of the site with the sun/moon icon. The site is expected to start in light mode. Upon clicking the toggle, the icon will change and the site will change to dark mode.
This change is expected to persist across all pages. It will persist without issue in Chrome and other Chromium-based browsers. Firefox is a little more finicky as it will be buggy when seeing the site as a local file, but this seems to be a firefox issue than an issue with the code as this can be resolved by simply opening up a web server in the root folder (i.e. python3 -m http.server) and going to http://localhost:8000, which will get everything working correctly.

The images will get a little more transparent when hovered over with a mouse and when clicked will open a popup with the image enlarged. Clicking the x or simply outside the image will close this dialog. This is also expected to work with keyboard functionality as the images are now made tabbable and pressing escape will also allow the user to close the image.

