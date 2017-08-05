import { scriptInjector } from './modules/script-injector';

window.onload = () => {
  /**
   * Template string version of script to inject into the google translate page.
   * Removes a whole bunch of different bullshit.
   * @returns {string}
   */
  const gTranslateKill = () => {
    return `(${(function() { // eslint-disable-line func-names
      /**
       * Removes unwanted wrapper elements and preserves the original child
       * @param wrapper
       * @returns {Node}
       */
      const unwrap = (wrapper) => {
        // place childNodes in document fragment
        const docFrag = document.createDocumentFragment();
        while (wrapper.firstChild) {
          const child = wrapper.removeChild(wrapper.firstChild);
          docFrag.appendChild(child);
        }
        // replace wrapper with document fragment
        return wrapper.parentNode.replaceChild(docFrag, wrapper);
      };

      // Google wraps text/links with annoying garbage. Remove it and keep the wrapped el
      [].forEach.call(document.querySelectorAll('.notranslate'), wrapper => unwrap(wrapper));

    }).toString()})();`; // eslint-disable-line func-names
  };

  // Function to inject our script string into the iframe
  const injectScript = () => scriptInjector((document.head || document.documentElement), gTranslateKill); // eslint-disable-line max-len

  // Inject the script when the iframe initially loads
  // if (window.location.href.includes('translate.googleusercontent')) {
    // One of the main issue elements from g-translate. Remove it.
  document.body.removeChild(document.getElementById('google-infowindow'));

  injectScript();
  // }
};

// TODO: What can I target for page navigation in gTranslate iframe?
const mutationTarget = window.document;
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log(mutation);
  });
});
// Config and start mutation observer
const config = { attributes: true, childList: true, characterData: true, subtree: true };
observer.observe(mutationTarget, config);

