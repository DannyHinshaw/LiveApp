/* eslint-disable padded-blocks */
export const UI = {

  // Custom Element Templates
  templates: {

    /* eslint-disable key-spacing */
    iframeContainer: `<div id='iframeContainer'></div>`,

    /* eslint-disable arrow-body-style, indent, max-len, padded-blocks */
    iframeNavigator: tabs => `
                        <nav class="tabs-nav">
                          ${tabs.map((tab) => {

                            return `
                              <div class="tab ${tab.type}">
                                <div class="tab-box ${tab.type}"></div>
                                <div class="tab-head">
                                <span>
                                  <img aria-hidden="true" class="icon" 
                                  src="https://www.google.com/s2/favicons?domain_url=${tab.href.toLowerCase().trim()}">
                                  ${tab.type}
                                  </span>
                                </div>
                              </div>`;
                          }).join('')}             
                        </nav>`,
    /* eslint-enable arrow-body-style, indent, max-len */

    instructions   : `<div class='toggle-instructions'>
                        <span class='toggle-icon'> + </span> Click to toggle instructions
                      </div>
                      <br>`,

    venueIdClipped : `<span style='color: #61ca61; display: block;'>
                        <br>Copied to clipboard!
                      </span>`
    /* eslint-enable key-spacing */
  },

  /**
   * Cached array for storing link/iframe info
   */
  linkTabs: [],

  /**
   * Attaches the click events for instruction block toggling
   * @returns {UI}
   */
  toggleInstructions() {
    const header = document.querySelector('.formHeader');
    const instructions = document.querySelector('.formDescription');
    const toggler = document.querySelector('.toggle-instructions');
    const toggleIcon = toggler.querySelector('.toggle-icon');
    toggler.classList.toggle('open');

    if (toggler.classList.contains('open')) {
      header.style.height = '20rem';
      instructions.style.display = 'block';
      toggler.style.backgroundColor = '#97ceea';
      toggleIcon.innerHTML = ' - ';
    } else {
      header.style.height = 'initial';
      instructions.style.display = 'none';
      toggler.style.backgroundColor = '#97eaa2';
      toggleIcon.innerHTML = ' + ';
    }
    return this;
  },

  /**
   * Style method for turning large instruction box to toggle
   * @returns {UI}
   */
  clearInstructions() {
    const formName = document.querySelector('.formName');
    formName.insertAdjacentHTML('afterend', this.templates.instructions);

    // Remove instruction block and assign toggle function
    document.querySelector('.formDescription').style.display = 'none';
    document.querySelector('.toggle-instructions').addEventListener('click', this.toggleInstructions);
    return this;
  },

  /**
   * Fixes formatting where descriptions are too long and screw up grid
   */
  descriptionLimit() {
    return [...document.querySelectorAll('.description')].forEach(d => // eslint-disable-line no-confusing-arrow
      d.textContent.length > 52 ? d.parentElement.setAttribute('style', 'display:block;') : this);
  },

  /**
   * Remove random unnecessary elements that take up too much space on the original form
   */
  removeUnwantedElements() {
    [document.querySelector('.formCoverImageContainer'),
      ...document.querySelectorAll('.createYourOwnFormWithAirtable')]
      .forEach(el => el ? el.remove() : this); // eslint-disable-line no-confusing-arrow
  },

  /**
   * Tail of promise creating stack for browsing tabs
   * @param tab
   * @param fn
   * @returns {*}
   */
  createTabs(tab, fn) {
    this.linkTabs.push(tab);
    return fn();
  },

/*
  gTranslateScript() {
    const scriptSrc = `(${(function() {
      document.getElementById('wtgbr').remove();
      document.getElementById('gt-c').remove();
    }).toString()})();`;

    window.frames['Website'].document.getElementsByTagName('head')[0]
      .appendChild(((elem, inner) => {
        elem.setAttribute('iframe_script', 'text/javascript');
        elem.setAttribute('type', 'text/javascript');
        elem.appendChild(document.createTextNode(inner));
        return elem;
      })(document.createElement('script'), scriptSrc));

  },
*/
  /**
   * Generates an iframe from given params
   * @param type: Facebook, Instagram or Website of Venue
   * @param href: URL
   * @returns {Element}
   */
  createIframe({ type, href }) {
    return ((iframe) => {
      iframe.classList.add('iframe-stacked', type);
      iframe.setAttribute('name', type);
      iframe.setAttribute('src', // href.startsWith('http') ? href : `http://${href}`);
        (() => {
          if (href.startsWith('http')) {
            if (href.startsWith('http://')) {
              return `https://translate.google.com/translate?sl=ja&tl=en&u=${href}`;
            } else {
              return href;
            }
          } else {
            return `http://${href}`;
          }
        })());
      return iframe;
    })(document.createElement('iframe'));
  },

  /**
   * Gathers the form links and calls filter on them
   * @returns {Array.<*>}
   */
  getLinks() {
    const getName = l => l.closest('.sharedFormField').firstElementChild.textContent.split('Venue ')[1].trim();

    return Promise.all([...document.querySelectorAll('.sharedFormField .detailViewTextWithLinks a')]
      .map((link) => {
        if (link.href.includes('https://airtable.com')) {
          // Side-Effect: Assign recurEventLink for formModal while already iterating links
          return Object.defineProperty(UI, 'recurEventLink', { value: link.href });
        }
        return { type: getName(link), href: link.href };
      }).filter(link => link.type));
  },

  /**
   * Calls iframe DOM creation method and appends it to container
   * @param container
   * @param tab
   */
  generateIframes(container, tab) {
    const callback = () => container.prepend(this.createIframe(tab));
    return this.createTabs(tab, callback);
  },

  /**
   * Adds 'active' class to selected tabs/iframes
   * @param tabIframeSet: array of matching tab/iframe pairs
   */
  focusIframeTabSet(tabIframeSet) {
    return [...tabIframeSet].forEach(el => el.classList.add('active'));
  },

  /**
   * Iterates through tab/iframe pairs and controls focus
   * @param tab: current tab in iteration
   * @param iframe: current iframe in iteration
   */
  assignTabControls([tab, iframe]) {
    return tab.addEventListener('click', (e) => {

      const _target = e.target.classList.contains('tab') ? e.target : e.target.closest('.tab');
      const _targetType = _target.classList[1];

      if (!_target.classList.contains('active')) {

        this.focusIframeTabSet([_target, iframe]);

        [...document.querySelectorAll('.active')].forEach((node) => {
          if (!node.classList.contains(_targetType)) {
            node.classList.remove('active');
          }
        });
      }
      return this;
    });
  },

  /**
   * Sets the relationship array pairs for tabs and their respective iframes
   */
  combineIframeTabEvents() {
    return this.linkTabs.forEach((tab, i) => {

      const tabIframeSet = [...document.querySelectorAll(`.${tab.type}:not(.tab-box)`)];

      if (i === 0) {
        // Focus the first frame as we iterate
        UI.focusIframeTabSet(tabIframeSet);
      } else if (i === 1) {
        // FIXME: This is a hack for the reversed tab order. Really should be fixed in CSS
        document.querySelector(`.tab.${tab.type}`).setAttribute('style', 'z-index: 1;');
      }
      return UI.assignTabControls(tabIframeSet);
    });
  },

  /**
   * Retrieves available venue links from the form to create the iframe tabs
   * @param container: iframe container
   */
  async buildVenueTabs(container) {
    const tabs = await this.getLinks();
    return tabs.forEach(tab => this.generateIframes(container, tab));
  },

  /**
   * Starts the method chain to create/add iframes to UI
   * @returns {*}
   */
  async setIframes() {
    const formContainer = document.querySelector('.formFieldAndSubmitContainer');
    const formHeader = document.querySelector('.formHeader');
    formContainer.prepend(formHeader);
    formContainer.insertAdjacentHTML('afterend', this.templates.iframeContainer);
    const iframeContainer = document.getElementById('iframeContainer');

    await this.buildVenueTabs(iframeContainer);
    await iframeContainer.insertAdjacentHTML('afterbegin', this.templates.iframeNavigator(this.linkTabs));
    return this.combineIframeTabEvents();
  },

  /**
   * Initializes the Object/UI and calls the base methods for setup
   * @returns {Promise.<UI>}
   */
  async init() {
    // DOM JS Methods need to wait shortly after window for load
    await this.clearInstructions();
    await this.descriptionLimit();
    await this.removeUnwantedElements();
    await this.setIframes();
    // await this.gTranslateScript();

    return this;
  }

};
