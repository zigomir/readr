## Learned

https://gist.github.com/jjperezaguinaga/4243341

If you define `popup.html` in `manifest.json` file, you can't use `chrome.browserAction.onClicked` on
`background.js`. But then you can just send message from `popup.html` and listen to it inside `background.js`.
Caveat: you need to include a JS from a file into popup.html. Using JS in `popup.html` file between `<script>`
tags won't work! -> this is know fact, you cant inline JS for Chrome extensions.


## Rights

Icon taken from http://bobsicle0.deviantart.com/art/Rainbow-Dash-Imminent-Laughter-455616326


## Development

```bash
npm run start
```

### Testing

```bash
npm run watch-tests
# another terminal
npm test
```
