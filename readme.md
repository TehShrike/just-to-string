# just-to-string

```sh
npm i just-to-string
```

```
const toString = require('just-to-string')
```

It's just `toString`, but without any chance of throwing

<!--js
const toString = require('./')
-->

```js
toString(null) // => '[object Null]'
toString(Object.create(null)) // => '[object Object]'
```

# License

[WTFPL](http://wtfpl2.com)
