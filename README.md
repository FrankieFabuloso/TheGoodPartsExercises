1. Write and identity() function that takes and argument and returns that argument
ie.
```
identity(3) // 3
```

2. Write three binary functions, add(), sub(), and mul(), that take two numbers and return their sum,
difference, and product.
ie.
```
add(3,4) // 7
sub(3,4) // -1
mul(3,4) // 12
```

3. Write a function identityf() that takes an argument and returns a function that returns an argument.
ie.
```
const three = indetityf(3)
three() // 3
```

4. Write a function addf() that adds from two invocations.
ie.
```
addf(3)(4) // 7
```

5. Write a function liftf that takes a binary function, and makes it callable with two invocations.
ie.
```
const addf = liftf(add)
addf(3)(4)         // 7
liftf(mul)(5)(6)   // 30
```

6. Write a curry() that takes a binary function and an argument, and returns a function that can take a second argument.
ie.
```
const add3 = curry(add, 3)
add3(3)                  // 7
curry(mul, 5)(6)         // 30
```

7. Without writing any new functions, show three ways to create the inc() function. (increments by 1 each call)
ie.
```
const inc = _______
inc(5)              // 6
inc(inc(5))         // 7
```

8. Write a function twice() that takes a binary function and returns a unary function that passes its argument to the binary function twice.
ie.
```
add(11, 11)     // 22
const doubl = twice(add)
doubl(11)       // 22
const square = twice(mul)
square(11)       // 121
```

9. Write reverse(), a function that reverses the argument of a binary function.
ie.
```
sub(3,2)           // 1
const bus = reverse(sub)
bus(3,2)           // -1
```

10. Write a function composeu() that takes two unary functions and returns a unary function that calls them both.
ie.
```
composeu(doubl, square)(5)     // 100
```

11. Write a function composeb() that takes two binary functions and returns a function that calls them both.
ie (2+3)x(7)
```
composeb(add, mul)(2,3,7)      // 35
```

12. Write a limit function that allows a binary function to be called a limited number of times.
ie.
```
const add_ltd = limit(add, 1)
add_ltd(3,4)        // 7
add_ltd(1,2)        // undefined
```

13. Wite a from() function that produces a generator that will produce a series of values.
ie.
```
const index = from(0)
index()           // 0
index()           // 1
index()           // 2
```

14. Write a to() function that takes a generator and an end value, and returns a generator that will produce numbers up to that limit.
ie.
```
const index = to(from(1), 3)
index()           // 1
index()           // 2
index()           // undefined
```

15. Write a fromTo() function that produces a generator that will produce values in a range.
ie.
```
const index = fromTo(0, 3)
index()           // 0
index()           // 1
index()           // 2
index()           // undefined
```

16. Write an element() function that takes an array and a generator and returns a generator that will produce elements from the array.
ie.
```
var ele = element(['a', 'b', 'c', 'd'], fromTo(1,3))
ele()   // 'b'
ele()   // 'c'
ele()   // undefined
```

17. Modify the element() function so that the generator is optional. If a generator is not provided, then each of the elements in the array will be produced.
```
var ele = element(['a', 'b', 'c', 'd'])
ele()   // 'a'
ele()   // 'b'
ele()   // 'c'
ele()   // 'd'
```
18. Write a collect() function that takes a generator and an array and produces a function that will collect the results in the array.
```
const array = []
const col = collect(fromTo(0,2), array)
col()       // 0
col()       // 1
col()       // undefined
array       // [0,1]
```

19. Write a filter() function that takes a generator and a predicate and produces a generator that will produce only values approved by the predicate.
```
const fil = filer(fromTo(0,5), function third(value) {
  return (value%3) === 0
})
fil()       // 0
fil()       // 3
fil()       // undefined
```

20. Write a concat() function that takes two generators and produces a generator that combines the sequences.
```
const con = concat(fromTo(0,3), fromTo(0,2))
con()       // 0
con()       // 1
con()       // 2
con()       // 0
con()       // 1
con()       // undefined
```

21. Write a repeat() function that takes a generator and calls it until it returns undefined.
```
const arrya = []
repeat( collect(fromTo(0,4), array) )
console.log(array)      // [0, 1, 2, 3]
```
22. Write a map() function that takes an array and a urnary function, and returns an array containing the result of passing each element to the unary function. Use the repeat() function.
```
map( [2, 1, 0], inc )       // [3, 2, 1]
```

23. Write a reduce function that takes an array and a binary function, and returns a single value. Use the repeat() function.
```
reduce([], add)         //undefined
reduce([2], add)        // 2
reduce( [2, 1, 0], add) // 3
```

24. Make a function gensymf that makes a function that generates unique symbols.
```
const geng = gensymf('G')
const genh = gensymf('H')
geng()        // "G1"
genh()        // "H1"
geng()        // "G2"
genh()        // "H2"
```
25. Write a function gensymff() that takes a unary function and a seed and returns gensymf().
```
const gensymf = gensymff(inc, 0)
const geng = gensymf('G')
const genh = gensymf('H')
geng()        // "G1"
genh()        // "H1"
geng()        // "G2"
genh()        // "H2"
```

26. Make a function fibonaccif that returns a generator that will returns the next fibonacci number.
```
const fib = fibonaccif(0,1)
fib()         // 0
fib()         // 1
fib()         // 1
fib()         // 2
fib()         // 3
fib()         // 5
```
27. Write a counter() function that returns an object containing two functions that implement an up/down counter, hiding the counter.
```
const object = counter(10)
const up = object.up
const down = object.down
up()          // 11
down()        // 10
down()        // 9
up()          // 10
```   
28. Make a revocable() function that takes a binary function, and returns an object containing invoke() function that can invoke the binary function, and a revoke() function that disables the invoke() function.
```
const rev = revocable
const inv = rev.invoke
inv(2,3)        // 5
inv(3,4)        // 7
rev.revoke();
inv(10,1)       // undefined

```
29. Write a function m() that takes a value and an optional source string and returns them in an object.

```
JSON.stringify( m(1) )                // {"value": 1, "source": "1"}
JSON.stringify( m(Math.PI, "pi") )     // {"value": 3.14159..., "source": "pi"}

```
30. Write a function addm that takes two m objects and returns an m object.
```
JSON.stringify( addm( m(1), m(3) ) )                
// {"value": 4, "source": "1+3"}
JSON.stringify( addm( m(Math.PI, "pi"), m(1) ) )     
// {"value": 4.14159..., "source": "pi+1"}

```
31. Write a function liftm that takes a binary function and a string and returns a function that acts on m objects.
```
const addm = liftm( add, '+')
JSON.stringify( addm( m(1), m(3) ) )                
// {"value": 4, "source": "1+3"}
JSON.stringify( liftm(mul, '*')( m(2), m(4) ) )     
// {"value": 8, "source": "2*4"}

```
