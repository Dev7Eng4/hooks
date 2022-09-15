# Closure

- is a function having access to the parent scope, even after the parent function has closed

# Deep copy and shallow copy

- deep copy means that all of the values of the new variable are copied and disconnected from the original variable
- shallow copy means that certain (sub-)values are still connected to the original variable
- deep copy: primitive type
- shallow copy: copy object (just copy pointers/references) without destructuring, spread operator, Oject.assign, JSON.stringify
