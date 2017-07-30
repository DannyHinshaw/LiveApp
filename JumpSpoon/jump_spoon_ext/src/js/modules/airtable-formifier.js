export const AirTableFormifier = {
  // Custom Element Templates
  templates: {
    /* eslint-disable key-spacing */
    iframeContainer: `<div id='iframeContainer'></div>`,
    instructions   : `<div class='toggle-instructions'>
                        <span class='toggle-icon'> + </span> Click to toggle instructions
                      </div>
                      <br>`,
    venueIdClipped : `<span style='color: #61ca61; display: block;'>
                        <br>Copied to clipboard!
                      </span>`
    /* eslint-enable key-spacing */
  },

  linkTabs: [],

  clearInstructions() {
    const formName = document.querySelector('.formName');
    formName.insertAdjacentHTML('afterend', this.templates.instructions);

    // Remove instruction block and assign toggle function
    document.querySelector('.formDescription').style.display = 'none';
    document.querySelector('.toggle-instructions').onclick = this.toggleInstructions;
    return this;
  },

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

  descriptionLimit() {
    // Fixes formatting where descriptions are too long and screw up grid
    return [...document.querySelectorAll('.description')].forEach((d) => { // eslint-disable-line arrow-body-style
      return d.textContent.length > 52 ? d.parentElement.setAttribute('style', 'display:block;') : this;
    });
  },

  removeUnwantedElements() {
    [document.querySelector('.formCoverImageContainer'),
      ...document.querySelectorAll('.createYourOwnFormWithAirtable')]
      .forEach(el => el ? el.remove() : this); // eslint-disable-line no-confusing-arrow
  },

  /**
   * Tail of promise creating stack for browsing tabs
   * @param tab
   * @param callback
   * @returns {*}
   */
  createTabs(tab, callback) {
    this.linkTabs.push(tab);
    return callback();
  },

  /**
   * Generates an iframe from given params
   * @param type: Facebook, Instagram or Website of Venue
   * @param href: URL
   * @returns {Element}
   */
  createIframe({ type, href }) {
    const iframe = document.createElement('iframe');
    iframe.className = `iframe-stacked ${type}`;
    iframe.src = href.startsWith('http') ? href : `http://${href}`;
    return iframe;
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
          return Object.defineProperty(AirTableFormifier, 'recurEventLink', { value: link.href });
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

  buildVenueTabs(container) {
    return this.getLinks()
      .then(tabs =>
        tabs.forEach(tab => this.generateIframes(container, tab)));
  },

  /**
   * Starts the method chain to create/add iframes to UI
   * @returns {*}
   */
  setIframes() {
    const formContainer = document.querySelector('.formFieldAndSubmitContainer');
    const formHeader = document.querySelector('.formHeader');
    formContainer.prepend(formHeader);
    formContainer.insertAdjacentHTML('afterend', this.templates.iframeContainer);

    return this.buildVenueTabs(document.getElementById('iframeContainer'))
      .then(() => console.log('create nav here', this.linkTabs)); // eslint-disable-line no-console
  },

  init() {
    // DOM JS Methods need to wait shortly after window for load
    this.clearInstructions();
    this.descriptionLimit();
    this.removeUnwantedElements();
    this.setIframes();
  }
};
