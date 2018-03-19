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

#### Multitasking

Some stuff takes longer than others.  If part of your code makes a request to some server somewhere, that will take a while to complete. 


{{<highlight javascript>}}

// ⌛️ this will take ages...
var data = fetchDataFromTheInternet();

// this will be fairly quick
var upperCaseData = makeDataUpperCase(data);

// ⌛️ this will also take ages...
putDataInDatabase(upperCaseData);

// this will be quite quick
var sum = addNumbers(2, 4);

// doesn't even break a sweat
console.log(sum);

{{</highlight>}}