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

---
A "callback" is just... 

#### some function that is called by another function 

##### (kinda)


I'll explain what I mean. Let's declare a function, then call it.
{{<highlight javascript>}}
// let's call this snippet 1

function functionOne(data) { 
	console.log(data);
}

var greeting = "Hey everyone";

functionOne(greeting);

// --> "Hey everyone"
{{</highlight>}}

Here, `console.log` is called by `functionOne`.
So that makes `console.log` a callback, right?  

Well, no.

A callback is (actually)...

#### some function that is called by another function 
##### and also
#### it was passed _as an argument_ to that other function


So let's rewrite this to make `console.log` a real, legit callback.
{{<highlight javascript>}}
// snippet 2

function functionOne(functionTwo, data) { 
	functionTwo(data);
}

var greeting = "Hey everyone";

functionOne(greeting, console.log);

// --> "Hey everyone"
{{</highlight>}}

In code snippet 1, we hard-coded `console.log` into the defintion of `functionOne`.  
But in code snippet 2, it is an argument of `functionOne`.  When we run our code and actually call `functionOne` it receives `greeting` and `console.log` as arguments.

Ok cool, now you know what a callback is.  But, why should you care??

#### When things take a long time 

Imagine you have some code, where some stuff takes longer to complete than others.  Something like this:

{{<highlight javascript>}}

// ⌛️ this will take ages...
var data = fetchDataFromTheInternet();

// this will be fairly quick
var upperCaseData = makeUpperCase(data);

// ⌛️ this will also take ages...
putInDatabase(upperCaseData);

// this will be quite quick
var sum = addNumbers(2, 4);

// doesn't even break a sweat
console.log(sum);

{{</highlight>}}

Let's say the stuff that takes a long time takes 3 seconds to complete.  (3 seconds is quite a long time in computer land - imagine clicking on something and nothing happening for 3 whole seconds!)  And let's say the stuff that's quite fast takes only 0.5 seconds.  How long will it take for this piece of code to be done?

Let's assume each part of this code runs in order, i.e. `fetchDataFromTheInternet` happens first, then `makeUpperCase` etc.

{{<highlight javascript>}}

// 3 seconds
var data = fetchDataFromTheInternet();

// 0.5 seconds
var upperCaseData = makeUpperCase(data);

// 3 seconds
putInDatabase(upperCaseData);

// 0.5 seconds
var sum = addNumbers(2, 4);

// 0.5 seconds
console.log(sum);

// TOTAL TIME: 7.5 seconds 😩

{{</highlight>}}

7.5 seconds is a long time.  Well, we can't help the fact that fetching data takes a while.  Same goes for talking to databases.  These are just facts of life.  

So is there _any_ way to speed this up? 