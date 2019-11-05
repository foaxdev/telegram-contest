'use strict';

(() => {
  const countriesTemplate = document.querySelector('#countries');
  const countryItemTemplate = countriesTemplate.content.querySelector('.countries-list__item');

  window.country = {
    createBlock: (name, code, flag) => {
      const countryItem = countryItemTemplate.cloneNode(true);

      countryItem.querySelector('.countries-list__flag').innerText = flag;
      countryItem.querySelector('.countries-list__name').innerText = name;
      countryItem.querySelector('.countries-list__phone-code').innerText = code;

      return countryItem;
    }
  };
})();
