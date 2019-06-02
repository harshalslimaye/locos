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
  test('should create a new element', () => {
    expect(createElement(el.type, el.props, 'Hello')).toEqual(el);
  });
});
