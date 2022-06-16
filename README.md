# Extension Fingerprints

Check it out here: https://z0ccc.github.io/extension-fingerprints

Chrome extensions can be detected by fetching their web accessible resources. These are files inside an extension that can be accessed by web pages. The detected extensions can be used to track you through browser fingerprinting.

This website scans over 1000 extensions and shows you the percentage of users that share the same extensions.

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

### Manifest v3 declaration

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

A webpage can successfully fetch an installed extensions web accessible resource. If the fetch fails it usually means that the extension is not installed.

```
fetch(`chrome-extension://okbilfbeogweaoehlefnkodbefgpgknn/test.png`)
      .then(() => (true))
      .catch(() => (false))
```

### Resource timing comparison

In an effort to prevent detection some extensions now generate a secret token thats required to access their web accessible resources. Any fetch operation made without the secret token will result in failure. Although its much more difficult to detect these protected extensions, its still possible.

Resources of protected extensions will take longer to fetch than resources of extensions that are not installed. By comparing the timing differences you can accurately determine if the protected extensions are installed or not.

### MetaMask

Although MetaMask has no web accessible resources, it can still be easily detected. This will not work on Brave as `typeof window.ethereum !== 'undefined'` will return true regardless of whether the extension is installed or not.

```
  if (typeof window.ethereum !== 'undefined' && !navigator.brave) {
    return true;
  }
  return false;
```

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
