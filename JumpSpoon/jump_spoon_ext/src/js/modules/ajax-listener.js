import { scriptInjector } from './script-injector';
/**
 * Inject a script to hijack the AirTable API calls
 * Fires a custom window event when calls resolve
 * Other methods for detecting DOM load/ready failed
 * @type Promise
 */
export const AJAXListener = {

  /**
   * Custom script to hijack AJAX calls on AirTable form
   * @returns {string}
   * @private
   */
  _hijacker() {
    return `(${(function() { // eslint-disable-line func-names
      function bindResponse(request, response) {
        request.__defineGetter__('responseText', () => { // eslint-disable-line no-restricted-properties, line
          // console.warn('AirTableXHR::Something tried to get the responseText');
          console.debug(response); // eslint-disable-line no-console
          window.dispatchEvent(new CustomEvent('AirTableXHR::finished'));
          return response;
        });
      }

      function processResponse(request, caller, method, path) { // eslint-disable-line no-unused-vars, max-len
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
    }).toString()})();`; // eslint-disable-line func-names
  },

  /**
   * Creates and injects the _hijacker script-element
   * @returns {Node}
   */
  injectScript() {
    // Hack to listen for AirTable API calls to finish loading
    return window.location.href.indexOf('?prefill_Venue%20ID') < 0 ? null :
      scriptInjector(document.documentElement, this._hijacker, { id: 'AJAX_hj' });
  },

  /**
   * Sets the event listener for finished AirTable AJAX calls
   * @returns {Promise}
   */
  loadEvent() {
    // TODO: Figure out how to completely remove eventListener
    return new Promise(resolve => window.addEventListener('AirTableXHR::finished', resolve));
  }
};
