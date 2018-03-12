---
title: "Generics"
date: 2018-03-09T11:46:36Z
draft: false
tags: ["typescript", "oop"]
---

Generics are what you use to make it possible to have generic functions in a language that’s strongly typed.

So normally, if you declare a function in a typed language, you have to define precisely what the types of the parameters of that function will be, as well as the type of the return value.  And the function will only work with the types it’s expecting.

In weakly-typed languages, like JavaScript, you don’t explicitly define what types your parameters/return values will be.  So if you have a function that you want to be able to handle a variety of data structures or types, it can do that easily.

Problematic in strongly-typed languages.  This is what generics are for.

When defining the function, you basically indicate a fake type.  Often, it will be denoted as `<T>`. 

So today we were trying to do some ninja TypeScript, where we wanted to filter an array with two different types in it, to produce just one.  We have a union type:


    PresOp = AddOp | RemoveOp


    receivePresOps(presOps: PresOp[]) {
      const addOps: AddOp[] = filterByType(presOps, isAddOp);
      const removeOps: RemoveOp[] = filterByType(presOps, isRemoveOp);
    }
    
    // these are type guards
    // their parameters MUST be of type any
    // otherwise no worky
    function isAddOp(op: any): op is AddOp {
      return op.opType === Optype.Joining;
    }
    function isRemoveOp(op: any): op is RemoveOp {
      return op.opType === Optype.Leaving;
    }