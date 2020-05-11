### Installation
```
npm install --save @anvilapp/localization
```
or
```
yarn add @anvilapp/localization
```

### Usage
```js
import {trans, setLocalizations} from '@anvilapp/localization';

setLocalizations({
    en: {
        'hello': 'hello',
        'hello %s': 'hello %s',
        'hello %s %s': 'hello %s %s',
    },
    es: {
        'hello': 'hola',
        'hello %s': 'hola %s',
        'hello %s %s': 'hola %s %s',
    }
});

console.log(trans('en', 'hello')); // hello
console.log(trans('es', 'hello')); // hola
console.log(trans('en', 'hello %s', 'John')); // hello John
console.log(trans('es', 'hello %s %s', 'John', 'Smith')); // hola John Smith
```
