# Locos
Locos (pronounced /loʊ-cɒs:/, like Low cost)is a lightweight React like library for building modern UIs. :snowman:


## Features
- Functional components
- render props
- Lightweight
- No dependencies
- React like API

## Installation
```
npm install locos
```

## Usage
```js
import Locos from 'locos';

const Greet = (props) => {
  return <div>Hello {props.name}!</div>
};

Locos.render(
  <Greet name={'Locos'} />,
  document.querySelector('#root')
);
```