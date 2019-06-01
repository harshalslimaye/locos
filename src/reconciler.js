export function render(vElement, container, oldElement) {
  diff(vElement, container, oldElement);
}

function diff(vElement, container, oldElement) {
  if (!oldElement) {
    mount(vElement, container);
  }
}

function mount(vElement, container) {
  return mountElement(vElement, container);
}

function mountElement(vElement, container) {
  let newElement = null;

  if (vElement.type === 'text') {
    newElement = document.createTextNode(vElement.props.textContent);
  } else {
    newElement = document.createElement(vElement.type);
    setAttributes(newElement, vElement);
  }

  newElement._virtualElement = vElement;
  container.appendChild(newElement);

  if (vElement.children && vElement.children.length > 0) {
    vElement.children.forEach(child => mount(child, newElement));
  }
}

function setAttributes(newElement, vElement) {
  const newProps = vElement.props;
  Object.keys(newProps).forEach(propName => {
    const newPropValue = newProps[propName];
    if (propName.slice(0, 2) === 'on') {
      const eventName = propName.toLowerCase().slice(2);
      newElement.addEventListener(eventName, newPropValue, false);
    } else if (propName === 'value' || propName === 'checked') {
      newElement[propName] = newPropValue;
    } else if (propName === 'className') {
      newElement.setAttribute('class', newPropValue);
    } else {
      newElement.setAttribute(propName, newPropValue);
    }
  });
}
