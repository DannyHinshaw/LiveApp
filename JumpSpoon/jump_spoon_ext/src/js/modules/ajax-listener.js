export const AJAXListener = {
  injectScript(source) {
    // Hack to listen for AirTable API calls to finish loading
    const elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.innerHTML = source;
    document.documentElement.appendChild(elem);
  },

  hijacker: `(${(function() { // eslint-disable-line func-names
    let loaded = false;
    function bindResponse(request, response) {
      request.__defineGetter__('responseText', () => { // eslint-disable-line no-restricted-properties, line
        console.warn('AirTableXHR::Something tried to get the responseText'); // eslint-disable-line no-console
        console.debug(response); // eslint-disable-line no-console
        if (!loaded) {
          window.dispatchEvent(new CustomEvent('AirTableXHR::finished'));
          return loaded = true; // eslint-disable-line no-return-assign
        }
        return response;
      });
    }

    function processResponse(request, caller, method, path) { // eslint-disable-line no-unused-vars
      bindResponse(request, request.responseText);
    }

    const proxied = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function(method, path, async) { // eslint-disable-line func-names, max-len, no-unused-vars
      const caller = arguments.callee.caller; // eslint-disable-line max-len, no-caller, no-restricted-properties
      this.addEventListener('readystatechange', function() { // eslint-disable-line func-names
        if (this.readyState === 4) {
          processResponse(this, caller, method, path);
        }
      }, true);
      return proxied.apply(this, [].slice.call(arguments));
    };
  }).toString()})();` // eslint-disable-line func-names
};
