import { render } from '../src/reconciler';
import { createElement } from '../src/element';

describe('reconciler.js', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    container.remove();
  });

  test('should render html element', () => {
    const element = createElement('h1', { className: 'title' }, 'Hello');
    render(element, container);
    
    expect(container.querySelector('h1').textContent).toBe('Hello');
  });

  test('should render new html element', () => {
    const element1 = createElement('h1', { className: 'title' }, 'Hello1');
    const element2 = createElement('h1', { className: 'title' }, 'Hello2');
    render(element1, container);
    render(element2, container);

    expect(container.querySelector('h1').textContent).toBe('Hello2');
  });

  test('should render only one element', () => {
    const element1 = createElement('h1', { className: 'title' }, 'Hello1');
    const element2 = createElement('h1', { }, 'Hello2');
    render(element1, container);
    render(element2, container);

    expect(container.querySelectorAll('h1').length).toBe(1);
  });

  test('should add new attribute', () => {
    const element1 = createElement('h1', { className: 'title' }, 'Hello1');
    const element2 = createElement('h1', { className: 'title', id: 'title' }, 'Hello2');
    render(element1, container);
    render(element2, container);

    expect(container.querySelector('h1').id).toBe('title');
  });

  test('should attach value', () => {
    const element1 = createElement('input', { className: 'title' }, 'Hello1');
    const element2 = createElement('input', { className: 'title', value: 'testing' }, 'Hello2');
    render(element1, container);
    render(element2, container);

    expect(container.querySelector('input').value).toBe('testing');
  });

  test('should attach click event', () => {
    const fn = jest.fn();
    const element = createElement('h1', { onClick: fn }, 'Hello1');
    render(element, container);
    container.querySelector('h1').click();

    expect(fn).toBeCalled();
  });
});
