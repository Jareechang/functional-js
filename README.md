## Functional JS

playing around with some functional programming in javascript

#### Notes about arrow vs regular functions

1. lexical `this` and `arguments`

Arrow function doesn't have their own `this` or `arguments` binding. **Arrow Functions** are
useful when binding `this` of the current environment. In order to add custom environment `.bind(this)`
could be used.

2. Cannot call `New`

regular functions are *constructable* and *callable*. **Arrow Functions** are only *callable*.
Lastly, **Class constructors** are only constructable.


