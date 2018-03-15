---
title: "Callbacks Demystified"
date: 2018-03-15T23:27:21Z
draft: true
image: https://zackmorriscellphone.files.wordpress.com/2011/01/zackphone.jpg
tags: ["javascript", "beginners"]
---

Callbacks.  What on earth are they?
By the end of this blog post, you will know.
<!--more-->

#### tl;dr
A callback is **just some function
that is called by another function.
(kinda)**


#### Let's declare a function:

{{<highlight javascript>}}
function functionOne(data) { 
	console.log(data);
}
{{</highlight>}}


#### Now let's call it.
{{<highlight javascript>}}
var greeting = "Hey everyone";
functionOne(greeting);

// --> "Hey everyone"
{{</highlight>}}