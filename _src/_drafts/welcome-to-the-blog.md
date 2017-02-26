---
layout: post
title: First blog post.
tags: promises, es6, es2015
date: 2017-02-25 21:00:00
---
This is going to be my coding blog.

Fun fact: the film Hidden Figures inspired me to get this up and running.

{% highlight javascript %}
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducer.js';

export function makeStore (initialState) {

    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}

export const store = makeStore();
{% endhighlight %}
