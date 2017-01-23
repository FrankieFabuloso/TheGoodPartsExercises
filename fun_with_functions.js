const add = (a, b) => a+b
const sub = (a, b) => a-b
const mul = (a, b) => a*b
console.log( 'add:', add(2,3) )
console.log( 'sub:', sub(2,3))
console.log('mul:', mul(2,3) )

const identityF = (arg) => {
  return function() {
    return arg
  }
}
const three = identityF('farts')
console.log('three():', three())

// hiring question!
const addf = (one) => {
  return function(two) {
    return one + two
  }
}
console.log('--->addf')
console.log('addf()():', addf(3)(4))

// higher order function (functional progs)
const liftf = (func) => {
  return function(one) {
    return function(two) {
      return func(one, two)
    }
  }
}
let myAddF = liftf(add)
console.log('--->LiftFunc')
console.log('myAddF(3)(4):', myAddF(3)(4))
console.log('liftf(mul)(5)(6):', liftf(mul)(5)(6))

const curry = (func, num) => {
  return function(num2) {
    return func(num, num2)
  }
}

var add3 = curry(add, 3)
console.log('--->CurryFunc')
console.log('add3(4):', add3(4))
console.log('curry(mul, 5)(6):', curry(mul, 5)(6))

const inc1 = addf(1)
const inc2 = liftf(add)(1)
const inc3 = curry(add, 1)
console.log('inc1(5):',inc1(5) )
console.log('inc2(5):',inc2(5) )
console.log('inc3(5):', inc3(5))
console.log('inc1(inc1(5)):',inc1(inc1(5)) )
console.log('inc2(inc2(5)):',inc2(inc2(5)) )
console.log('inc3(inc3(5)):', inc3(inc3(5)))

const twice = (func) => {
  return function(num) {
    return func(num, num)
  }
}
const doubl = twice(add)
const square = twice(mul)
console.log('doubl(11):', doubl(11))
console.log('square(11):', square(11))

const reverse = (func) => {
  return function(a,b){
    return func(b,a)
  }
}
console.log('reverse(sub)(3, 2) :', reverse(sub)(3, 2) )

const composeu = (func1, func2) => {
  return function(num) {
    return func2(func1(num))
  }
}
console.log('composeu(doubl, square)(5):', composeu(doubl, square)(5))

const composeb = (func1, func2) => {
  return function (a,b,c) {
    return func2(func1(a,b), c)
  }
}
console.log('composeb(add, mul)(2,3,7):', composeb(add, mul)(2,3,7))

const limit = (func, callLDT) => {
  let numCalls = 0
  return function(a, b) {
    if(numCalls < callLDT){
      numCalls += 1;
      return func(a,b)
    } else {
      return undefined
    }
  }
}
const add_ltd = limit(add, 1)
console.log('add_ltd(3, 4):', add_ltd(3, 4))
console.log('add_ltd(3, 4):', add_ltd(3, 4))


const from = (start) => {
  return function(){
    return start++;
  }
}
const index = from(0)
console.log('index():', index())
console.log('index():', index())
console.log('index():', index())

const to = (gen, limit) => {
  return function() {
    let count = gen()
    if(count < limit) {
      return count
    }
  }
}
const index2 = to(from(1), 3)
console.log('index2():', index2())
console.log('index2():', index2())
console.log('index2():', index2())
console.log('index2():', index2())

const fromTo = (begin, end) => {
  return to(from(begin), end)
}
const index3 = fromTo(0,3)
console.log('index3():',index3() )
console.log('index3():',index3() )
console.log('index3():',index3() )
console.log('index3():',index3() )

const element = (array, gen) => {
  return function() {
    return array[gen()]
  }
}
const ele = element(['a', 'b', 'c', 'd'], fromTo(0,3))
console.log('ele():', ele())
console.log('ele():', ele())
console.log('ele():', ele())
console.log('ele():', ele())

const element2 = (array, gen=fromTo(0, array.length)) => {
  return function() {
    return array[gen()]
  }
}
const ele2 = element2(['a', 'b', 'c', 'd'])
console.log('ele2():', ele2())
console.log('ele2():', ele2())
console.log('ele2():', ele2())
console.log('ele2():', ele2())
console.log('ele2():', ele2())

const collect = (gen, array) => {
  return function() {
    let value = gen()
    if( value !== undefined){
      array.push(value)
    }
    return value
  }
}
const array = []
const col = collect(fromTo(0,2), array)
console.log('col():', col())
console.log('col():', col())
console.log('col():', col())
console.log('array:', array)

const filter = (gen, predicate) => {
  return function fart() {
    let value = gen()
    if( value===undefined || predicate(value) ){
      return value
    }
      return fart()
  }
}
const fil = filter(fromTo(0,5), function third(value) {
  return(value % 3) === 0
})
console.log('fil():', fil())
console.log('fil():', fil())
console.log('fil():', fil())

const concat = (genFirst, genSecond) => {
  return function() {
    let val = genFirst()
    if( val === undefined ){
      val = genSecond()
    }
    return val
  }
}
const con = concat(fromTo(0,3), fromTo(0, 2))
console.log('-->con():', con())
console.log('-->con():', con())
console.log('-->con():', con())
console.log('-->con():', con())
console.log('-->con():', con())
console.log('-->con():', con())


const gensymf = (sym) =>{
  let count = 1
  return function() {
    return sym+(count++)
  }
}
const geng = gensymf('G')
const genh = gensymf('H')
console.log('geng():', geng())
console.log('genh():', genh())
console.log('geng():', geng())
console.log('genh():', genh())

const fibonaccif = (int1, int2) => {
  return function() {
    let nextInt = int1
    int1 = int2
    int2 += nextInt
    return nextInt
  }
}
const fib = fibonaccif(0,1);
console.log('fib():', fib())
console.log('fib():', fib())
console.log('fib():', fib())
console.log('fib():', fib())

const objCounter = (num) => {
  return {
    up: function() {
      num += 1
      return num
    },
    down: function() {
      num -= 1
      return num
    }
  }
}

const myObjCounter = objCounter(10)
console.log('myObjCounter.up():', myObjCounter.up())
console.log('myObjCounter.up():', myObjCounter.up())
console.log('myObjCounter.down():', myObjCounter.down())
console.log('myObjCounter.up():', myObjCounter.up())

const revocable = (func) => {
  let revoked = true
  return {
    invoke: function(a, b) {
      if(revoked){
        return func(a,b)
      }
    },
    revoke: function() {
      revoked = false
    },
  }
}
const rev = revocable(add)
add_rev = rev.invoke
console.log('add_rev(1,2):', add_rev(1,2))
rev.revoke()
console.log('add_rev(1,2):', add_rev(1,2))

const m = (value, source=value) => {
  return {
    'value': value,
    'source': source
  }
}
console.log(JSON.stringify(m(1)))
console.log(JSON.stringify(m('farts', 'smelly')))

const addm = (m1, m2) => {
  return m(m1.value+m2.value, `(${m1.source}+${m2.source})`)
}
console.log( JSON.stringify( addm( m(1), m(3) ) ) )
console.log( JSON.stringify( addm( m(1), m(Math.PI, 'pi') ) ) )

const liftm = (func, string) => {
  return function(num1, num2) {
    typeof(num1) === 'number'? num1 = m(num1): num1
    typeof(num2) === 'number'? num2 = m(num2): num2
    return m(func(num1.value, num2.value),
    `(${num1.source}${string}${num2.source})` )
  }
}
console.log('typeof(m(1)):', typeof(m(1)))
console.log('typeof(1):', typeof(1))
const myaddm = liftm(add, '+')
const mymulm = liftm(mul, '*')
console.log( JSON.stringify( myaddm( 1, 3 ) ) )
console.log( JSON.stringify( mymulm( 3, 3 ) ) )
console.log( JSON.stringify( myaddm( m(1), m(Math.PI, 'pi') ) ) )

const exp = (array) => {
  if(Array.isArray(array)) {
    return array[0](exp(array[1]), exp(array[2]))
  }
  return array
}
console.log('exp([mul, 5, 11]):', exp([mul, 5, 11]))
console.log('exp(42):', exp(42))
console.log('exp(42):', exp([Math.sqrt,[add,[square, 3],[square, 4]]]))

const addg = (value) => {
  function more(next) {
    if (next === undefined) {
      return value
    }
    value += next
    return more
  }
  if (value !== undefined) {
    return more
  }
}
console.log('addg(5):', addg(5)(8)(9)())

const liftg = (binary) => {
  let lastMore = undefined
  function more(next) {
    if(typeof(next) === 'function'){
      return more
    } else if(next === undefined) {
      return lastMore
    }
    if(lastMore == undefined) {
      lastMore = next
      return more
    } else {
      lastMore = binary(lastMore, next)
      return more
    }
    return more
  }
  if(binary !== undefined) {
    return more
  }
}


// liftg retruns a functions that either returns first(the binary)
// or the function more()
const betterLiftg = (binary) => {
  return function (first) {
    if (first === undefined) {
      return first
    }
    return function more(next){
      if(next==undefined) {
        return first
      }
      first = binary(first, next)
      return more;
    }
  }
}
const liftedMul = betterLiftg(mul)
console.log('liftedMul():', liftedMul(9)(7)())
console.log('betterLiftg(5):', betterLiftg(mul)(8)(9)(0)())

const arrayg = (value) => {
  if(value === undefined){
    return []
  }
  let array = [value]
  return function more(next) {
    console.log('array:', array)
    if(next === undefined){
      return array
    }
    array.push(next)
    return more
  }
}
console.log('arrayg(3)():', arrayg(6)())

const continuize = (unary) =>{
  return function(callback, value) {
    return callback(unary(value))
  }
}
const sqrtc = continuize(Math.sqrt)
let a = []
sqrtc(console.log, 81)

// we have an array that we want to protect behind an API
function vector() {
  let floopy = []
  return {
    get: function get(i) {
      return floopy[i]
    },
    store: function store(i, v) {
      floopy[i] = v
    },
    append: function append(v) {
      floopy.push(v)
    },
  }
}

// a attacker can get access to this object by:
let stash;
let farts = vector()
farts.append(1)
farts.append(2)
farts.append(1)
farts.append(2)
farts.append(1)
farts.append(2)
console.log('farts.get(1):', farts.get(1))
farts.store('push', function() {
  stash = this;
})

console.log('farts.append():', farts.append())
console.log('stash:', stash)

// fix this by doing array[+1] cause arrays are not arrays!
