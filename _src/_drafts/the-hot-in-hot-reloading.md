---
layout: post
title: The 'hot' in hot reloading.
---
I've used hot reloading for a while now.  I first came across the concept when I switched from [Browserify](http://browserify.org/) to [Webpack](https://webpack.github.io/) to handle bundling my React code.

Hot reloading is sort of like auto refresh, but better.  

So you're writing some code, and you want to see the changes.  You don't want to have to hit refresh on the browser every 10 seconds.  That would be kinda annoying.  Auto refresh handles that.

But when you refresh the page, your entire app is reset.  Your changes have been applied, but you might have to, say, re-enter the app login details, or navigate back to the page you were actually working on to see its changes.

Hot reloading is a way to refresh only the part of the app that matters.
