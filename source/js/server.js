'use strict';

(() => {
  const SERVER_TIMEOUT = 10000;

  const Code = {
    SUCCESS: 200
  };

  window.server = {
    load: (url, successHandler) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', () => {
        if (xhr.status === Code.SUCCESS) {
          successHandler(xhr.response);
        } else {
          //window.messages.errorHandler(window.Language.STATUS_MESSAGE + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', () => {
        //window.messages.errorHandler(window.Language.CONNECTION_FAIL_MESSAGE);
      });

      xhr.addEventListener('timeout', () => {
        //window.messages.errorHandler(window.Language.REQUEST_FAIL_BY_TIME_MESSAGE + xhr.timeout + window.Language.MILLISECONDS);
      });

      xhr.timeout = SERVER_TIMEOUT;

      xhr.open('GET', url, true);
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.send();
    },
    save: (url, data, successHandler, errorHandler) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', () => {
        if (xhr.status === Code.SUCCESS) {
          successHandler(xhr.response);
        } else {
          //errorHandler(window.Language.STATUS_MESSAGE + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', () => {
        //errorHandler(window.Language.CONNECTION_FAIL_MESSAGE);
      });

      xhr.addEventListener('timeout', () => {
        //errorHandler(window.Language.REQUEST_FAIL_BY_TIME_MESSAGE + xhr.timeout + window.Language.MILLISECONDS);
      });

      xhr.timeout = SERVER_TIMEOUT;

      xhr.open('POST', url);
      xhr.send(data);
    }
  };
})();
