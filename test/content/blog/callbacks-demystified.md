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

<div class="message-box">
	<p>
	  1. some function that is called by another function <br/>
		+ <br/>
		2. it was passed as an argument to that other function
	</p>
</div>

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

7.5 seconds is a long time in computer world.  But what to do?  The fact is, fetching data takes a while.  Same goes for talking to databases.  These are just facts of life.  

So is there _any_ way to speed this up? 


Well, we don't have to wait for one thing to finish before we start the next thing.

### The Starbucks Way

Coffee takes a while to make.  Imagine being behind someone in the queue.  They get their order taken.  Then the baristas start grinding the beans.  Once the beans are ground they get a cup.  They put the person's coffee in the cup, then add milk.  Then they give the person their coffee. 

After that, they finally get round to taking your order.  And the person behind you has the same agonising wait that you just had.

{{<highlight javascript>}}
// PERSON AHEAD OF YOU
// 60 seconds
takeOrderFromCustomer();

// 120 seconds
var coffeeLiquid = grindCoffeeBeans(beans);

// 40 seconds
var blackCoffee = pourIntoCup(coffeeLiquid);

// 35 seconds
var finishedCoffee = addMilkFroth(blackCoffee);

// 15 seconds
giveToCustomer(finishedCoffee);

// YOUR TURN
// 60 seconds
takeOrderFromCustomer();

// 120 seconds
var coffeeLiquid = grindCoffeeBeans(beans);

// 40 seconds
var finishedCoffee = pourIntoCup(coffeeLiquid);

// 35 seconds
var latte = addMilkFroth(finishedCoffee);

// 15 seconds
giveToCustomer(finishedCoffee);


// TOTAL TIME: bloody ages 😩 😩

{{</highlight>}}


This would be a pretty silly way to do things.  The better approach would be for the baristas to take your order, then take someone else's order whilst your coffee is being made in the background.

By the way, the computer programming-y way of saying "do one thing, then wait until it's finished before doing the next thing" is: "do stuff __synchronously__".

{{<highlight javascript>}}

function makeCoffeeInBackground (customerName, thenDoThis) {

	// 120 seconds
	var coffeeLiquid = grindCoffeeBeans(beans);

	// 40 seconds
	var blackCoffee = pourIntoCup(coffeeLiquid);

	// 35 seconds
	var flatWhite = addMilkFroth(blackCoffee);

	thenDoThis(flatWhite, customerName)
}

var personInFront = takeOrderFromCustomer();
makeCoffeeInBackground(personInFront, giveToCustomer);

var you = takeOrderFromCustomer();
makeCoffeeInBackground(you, giveToCustomer);


// TOTAL TIME: bloody ages 😩 😩

{{</highlight>}}