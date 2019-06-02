import { isFunction } from './utils';

export function render(vElement, container) {
  diff(vElement, container, container.firstChild);
}

function diff(vElement, container, oldElement) {
  if (!oldElement) {
    mount(vElement, container);
  } else {
    update(vElement, oldElement);
  }
}

function update(vElement, oldElement) {
  if (isFunction(vElement.type)) {
    
  } else {
    updateElement(vElement, oldElement);
  }
}

function updateElement(vElement, oldElement) {
  const oldVElement = oldElement._virtualElement;

  if (vElement.type === oldVElement.type) {
    if (vElement.type === 'text') {
      if (oldVElement.props.textContent !== vElement.props.textContent) {
        oldElement.textContent = vElement.props.textContent;
      }
    } else {
      updateAttributes(oldElement, vElement, oldVElement);
      vElement.children.forEach((child, i) => update(child, oldElement.childNodes[i]));
    }
  }
}

function mount(vElement, container) {
  if (isFunction(vElement.type)) {
    mountComponent(vElement, container);
  } else {
    mountElement(vElement, container);
  }
}

function mountComponent(vElement, container) {
  mountElement(vElement.type(), container);
}

function mountElement(vElement, container) {
  let newElement = null;

  if (vElement.type === 'text') {
    newElement = document.createTextNode(vElement.props.textContent);
  } else {
    newElement = document.createElement(vElement.type);
    updateAttributes(newElement, vElement, {});
  }

  newElement._virtualElement = vElement;
  container.appendChild(newElement);

  if (vElement.children && vElement.children.length > 0) {
    vElement.children.forEach(child => mount(child, newElement));
  }
}

function updateAttributes(newElement, vElement, oldVElement) {
  const newProps = vElement.props || {};
  const oldProps = oldVElement.props || {};

  Object.keys(newProps).forEach(propName => {
    const newPropValue = newProps[propName];
    const oldPropValue = oldProps[propName];

    if (oldPropValue !== newPropValue) {
      if (propName.slice(0, 2) === 'on') {
        const eventName = propName.toLowerCase().slice(2);
        newElement.addEventListener(eventName, newPropValue, false);
        if (oldPropValue) {
          newElement.removeEventListener(eventName, oldPropValue, false);
        }
      } else if (propName === 'value' || propName === 'checked') {
        newElement[propName] = newPropValue;
      } else if (propName === 'className') {
        newElement.setAttribute('class', newPropValue);
      } else {
        newElement.setAttribute(propName, newPropValue);
      }
    }
  });

  Object.keys(oldProps).forEach((propName) => {
    const oldProp = oldProps[propName];
    const newProp = newProps[propName];
    if (!newProp) {
      if (propName.slice(0, 2) === 'on') {
        newElement.removeEventListener(propName.slice(2).toLowerCase(), oldProp, false);
      } else {
        newElement.removeAttribute(propName);
      }
    }
  })
}
