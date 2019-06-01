export function createElement(type, attrs, ...childElements) {
  const filteredElements = childElements
    .filter(child => child && child !== false)
    .map(child => (child instanceof Object ? child : createTextElement(child)));

  return {
    type,
    props: attrs || {},
    children: filteredElements
  };
}

function createTextElement(textContent) {
  return createElement('text', { textContent });
}
