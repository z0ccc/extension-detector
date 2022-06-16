# Extension Fingerprints

Check it out here: https://z0ccc.github.io/extension-fingerprints

Chrome extensions can be detected by fetching their web accessible resources. These are files inside an extension that can be accessed by web pages. The detected extensions can be used to track you through browser fingerprinting.

## Browser Fingerprinting

Browser fingerprinting is a powerful method that websites use to collect information about your browser type and version, as well as your operating system, active plugins, time zone, language, screen resolution and various other active settings.

These data points might seem generic at first and don’t necessarily look tailored to identify one specific person. However, there’s a significantly small chance for another user to have 100% matching browser information.

Websites use the information that browsers provide to identify unique users and track their online behavior. This process is therefore called “browser fingerprinting.”

https://pixelprivacy.com/resources/browser-fingerprinting/

## Web Accessible Resources

Web-accessible resources are files inside an extension that can be accessed by web pages or other extensions. Extensions typically use this feature to expose images or other assets that need to be loaded in web pages, but any asset included in an extension's bundle can be made web accessible.

By default no resources are web accessible; only pages or scripts loaded from an extension's origin can access that extension's resources. Extension authors can use the web_accessible_resources manifest property to declare which resources are exposed and to what origins.

### Manifest v2 declaration

```
  "web_accessible_resources": [
    "test1.png",
    "test2.png".
  ]
```

### Manifest v2 declaration

```
  "web_accessible_resources": [
    {
      "resources": [ "test1.png", "test2.png" ],
      "matches": [ "https://gihub.com/*" ]
    }
  ],
```

https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/

## Detecting Extensions

### Fetching web accessible resources

```
yarn
yarn run start
```

### Resource timing comparison

While the chrome.debugger API is active, a bar under the address bar is displayed. Hiding the bar is only possible when the --silent-debugger-extension-api command-line switch is used.

### MetaMask

Unfortunately Vytal doesn't work on Firefox since Firefox doesn't support the debugger API for extensions. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#browser_compatibility

## Solutions

### FireFox

## Dev

This application is built with Javascript and React.

Clone this repo and run these commands to start the development server.

```
yarn
yarn run start
```

Load the extension on Chrome:

- Access chrome://extensions/
- Check Developer mode
- Click on Load unpacked extension
- Select the build folder.
