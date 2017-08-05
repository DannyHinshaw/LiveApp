import { scriptInjector } from './modules/script-injector';
import msg from './modules/msg';

// Flexible document reference for iframes to be used throughout the script
const iframeBody = document.documentElement ? document.documentElement : document.body;

/**
 * Helper function for unwrapping children from their parents, and removing the parent
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

// gTranslate wraps textNodes in 'SPRITE' highlighting divs. Here we attempt to remove them all
const spriteUnwrapper = () => [].forEach.call(iframeBody.querySelectorAll('[class^=SPRITE]'), wrapper => unwrap(wrapper))

// gTranslate makes requests occassionally to certain images, we can leverage this
// in cases where the script was unable to completely remove the gTranslate CSS garbage
msg.init('ct', { g_translate_img_GET: () => spriteUnwrapper() });

/**
 * MAIN FUNCTION
 * Once the window loads we build a custom script and inject it into all gTranslate iframes
 */
window.onload = () => {
  /**
   * Template string version of script to inject into the google translate page.
   * Removes a whole bunch of different bullshit.
   * @returns {string}
   */
  const gTranslateKill = () => {
    return `(${(function() { // eslint-disable-line func-names

      // Need a localized version of the global 'unwrap' function
      // Technically we are right now inside a string element. Scope is iframe
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

  // One of the main issue elements from g-translate. Remove it.
  if (iframeBody.querySelector('#google-infowindow')) {
    const infoWinParent = iframeBody.querySelector('#google-infowindow').parentNode;
    infoWinParent.removeChild(document.querySelector('#google-infowindow'));
  }

  // Setup MutationObserver as fail-safe, google be tricky yo
  let loaded = false;
  const mutationTarget = iframeBody.querySelector('div.gmnoprint');

  /**
   * Create a Mutation observer for known gTranslate elements that producs garbage
   * @returns {boolean}
   */
  const observeGT = () => {
    if (mutationTarget) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => spriteUnwrapper());
      });

      // Config and start mutation observer
      const config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      };
      // Init observer
      observer.observe(mutationTarget, config);

    } else if (!loaded) {
      // If target isn't found the first time,
      // try again after short delay (instead of nested mutationObservers... for now)
      setTimeout(() => observeGT(), 500);
      loaded = true;
      return loaded;
    }
    return false;
  };

  // Call the MutationObserver function
  observeGT();

  // Function to inject our script string into the iframe
  const injectScript = () => scriptInjector((document.body || document.documentElement), gTranslateKill); // eslint-disable-line max-len

  // Inject the script when the iframe initially loads
  injectScript();

};
