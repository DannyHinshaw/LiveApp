/**
 * Utility function for dynamically injecting scripts into iframe
 * @param target: Target node to append script e.g. (document.head || document.documentElement)
 * @param callback: Function variable that returns the script from template
 *        callback example:
 *          const func = () => `(${(function() {
 *                                    console.log('script stuffs')
 *                               }).toString()})();`;
 * @param optId: HTML id attribute for script tag (optional, default is callback.name)
 *        optId format: { id: 'scriptIdString'}
 * @returns {Node|XML}: The actual built script element
 */
export const scriptInjector = (target, callback, { ...optId }) => { // eslint-disable-line arrow-body-style, max-len
  return target.appendChild(((elem, inner) => {
    elem.setAttribute('id', optId.id ? optId.id : callback.name);
    elem.setAttribute('type', 'text/javascript');
    elem.setAttribute('defer', '');
    elem.appendChild(document.createTextNode(inner));
    return elem;
  })(document.createElement('script'), callback()));
};
