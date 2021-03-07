# A Collection of notes for this basic unsplash app

## Only one of 'browser_action', 'page_action', and 'app' can be specified

### This code snippet is the example browser action
### And the built-in Ctrl+Shift+F keystroke brings it up
```
  "browser_action": {
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
  },
  "commands": {
    "_execute_browser_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+F",
        "mac": "MacCtrl+Shift+F"
      },
      "description": "Opens hello.html"
    }
  },
```

### This code snippet is the example page action
A page action is a clickable icon inside the browser's address bar. You can listen for clicks on the icon, or specify a popup that will open when the icon is clicked. If you specify a popup, you can define its contents and behavior using HTML, CSS and Js, just like a normal web page.
```
  "page_action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "images/get_started16.png",
      "32": "images/get_started32.png",
      "48": "images/get_started48.png",
      "128": "images/get_started128.png"
    }
  },
```

### "icons" help the extension know what images to use as its representative image for things like favicons
```
  "icons": {
    "16": "images/get_started16.png",
    "32": "images/get_started32.png",
    "48": "images/get_started48.png",
    "128": "images/get_started128.png"
  },
```