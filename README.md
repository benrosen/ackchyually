# ackchyually

A TypeScript testing utility powered by Jest.

![alt text](https://i.kym-cdn.com/photos/images/newsfeed/001/191/035/135.png)

## Quickstart

### Install

> `ackchyually` requires [`jest`]() as a [peer dependency]().

```zsh
yarn add ackchyually jest -D
```

### Write tests

```typescript
import assert from "ackchyually";

const isEven = (value: number): boolean => value % 2 === 0;

assert(
  [
    [0, true],
    [1, false],
    [2, true],
  ],
  isEven.name,
  isEven
);
```

### Run tests

```shell
yarn test
```

### Review test results

```shell
`isEven`
    ✓ Returns true for 0
    ✓ Returns false for 1
    ✓ Returns true for 2
```
