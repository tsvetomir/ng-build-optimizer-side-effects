# Build Optimizer - Bug report

Reproduction case for a bug with the Angular build optimizer.

Consider the following modules:

`foo/bar.ts`

```ts
export class Bar {
  static baz(): void {}
}
```

`foo/baz.ts`

```ts
import { Bar } from './bar';

Bar.baz = function() {
  alert('Hello');
}
```

`app.component.ts`

```ts
import { Bar } from './foo/bar';
import './foo/baz';

const bar = Bar.baz();
```

When the build optimizer is enabled, the code results in an error - `Bar is not defined`.
Turning either the build optimizer _or_ source maps resolves the issue.

## Steps to Reproduce

* `npm install`
* `ng serve --prod`
* Error in console: `Uncaught ReferenceError: Bar is not defined`

## Correct Behavior - with source maps turned off

* Set `sourceMap` to `false` in `angular.json:40`.
* `ng serve --prod`
* Alert appears, no error in console

## Correct Behavior - with build optimizer turned off

* Set `buildOptimizer` to `false` in `angular.json:46`.
* `ng serve --prod`
* Alert appears, no error in console

