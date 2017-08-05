import { scriptInjector } from './modules/script-injector';

window.onload = () => {
  console.log('window.onload::gTranslate running');

  function locationHashChanged() {
    console.log('PAGE CHANGED');
  }

  if (window.location.href.includes('translate.googleusercontent')) {
    console.log(window.MutationObserver);

    const gTranslateKill = () => {
      return `(${(function() { // eslint-disable-line func-names
        document.body.removeChild(document.getElementById('google-infowindow'));

        function unwrap(wrapper) {
          // place childNodes in document fragment
          const docFrag = document.createDocumentFragment();
          while (wrapper.firstChild) {
            const child = wrapper.removeChild(wrapper.firstChild);
            docFrag.appendChild(child);
          }

          // replace wrapper with document fragment
          wrapper.parentNode.replaceChild(docFrag, wrapper);
        }

        // Google wraps text/links with annoying garbage. Remove it and keep the wrapped el
        [].forEach.call(document.querySelectorAll('.notranslate'), wrapper => unwrap(wrapper));
      }).toString()})();`; // eslint-disable-line func-names
    };

    const injectScript = () => scriptInjector((document.head || document.documentElement), gTranslateKill); // eslint-disable-line max-len
    injectScript();
  }
};
