import { createElement } from '../src/element';

describe('element.js', () => {
  const el = {
    type: 'h1',
    props: { className: 'title' },
    children: [
      {
        type: 'text',
        props: { textContent: 'Hello' },
        children: []
      }
    ]
  };
  test('hello', () => {
    expect(createElement(el.type, el.props, 'Hello')).toEqual(el);
  });
});
