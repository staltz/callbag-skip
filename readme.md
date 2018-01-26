# callbag-skip

Callbag operator that skips the first N data points of a source. Works on either pullable and listenable sources.

`npm install callbag-skip`

## example

On a listenable source:

```js
const interval = require('callbag-interval');
const observe = require('callbag-observe');
const skip = require('callbag-skip');

const source = skip(3)(interval(1000));

source(0, observe(x => console.log(x))); // 3
                                         // 4
                                         // 5
                                         // 6
					 // ...
```

On a pullable source:

```js
const fromIter = require('callbag-from-iter');
const iterate = require('callbag-iterate');
const skip = require('callbag-skip');

function* range(from, to) {
  let i = from;
  while (i <= to) {
    yield i;
    i++;
  }
}

const source = skip(4)(fromIter(range(10, 20)));

source(0, iterate(x => console.log(x))); // 14
                                         // 15
                                         // 16
                                         // 17
                                         // 18
                                         // 19
                                         // 20
```
