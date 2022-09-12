# Side Effects

- bất kì những tương tác nào bên ngoài function

- Request Http
- Mutating data
- Console or printing to a screen
- Dom query/manipulation
- Math.random()
- Get current time

# Pure function

- is a function that always returns the same result if the same arguments are passed.
- does not depend on any state or data (variable outside function) change during a program's execution
- does not produce any observable side effects (`request network, input, output, data mutation`)
