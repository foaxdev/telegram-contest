'use strict';

(() => {
  const countriesTemplate = document.querySelector('#countries');
  const countryItemTemplate = countriesTemplate.content.querySelector('.countries-list__item');

  window.country = {
    createBlock: name => {
      const countryItem = countryItemTemplate.cloneNode(true);

      countryItem.querySelector('.countries-list__name').innerText = name;

      return countryItem;
    }
  };
})();
