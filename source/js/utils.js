'use strict';

(() => {
  window.utils = {
    addElementToDom: (parentElement, childElement) => {
      parentElement.appendChild(childElement);
    },
    isUndefined: element => typeof element === 'undefined'
  };
})();
