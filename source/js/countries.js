'use strict';

(() => {
  const countriesTemplate = document.querySelector('#countries');
  const countriesWrap = document.querySelector('.log-in-form__input-wrap');
  const countriesInput = countriesWrap.querySelector('input');
  const countriesList = countriesTemplate.content.querySelector('.countries-list').cloneNode(true);

  const generateCountries = () => {
    for (let country of window.countries.names) {
      countriesList.appendChild(window.country.createBlock(country.name, window.countries.codes[country.code], country.emoji));
    }
    countriesWrap.appendChild(countriesList);
  };

  const countriesInputClickHandler = () => {
    countriesWrap.classList.toggle('log-in-form__input-wrap--opened');
    countriesList.classList.toggle('countries-list--show');
  };

  const setEventListenerCountriesInput = () => {
    countriesInput.addEventListener('click', countriesInputClickHandler);
  };

  setEventListenerCountriesInput();
  generateCountries();
})();
