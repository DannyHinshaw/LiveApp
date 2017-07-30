import { AJAXListener } from './modules/ajax-listener';
/*
 import handlers from './modules/handlers';
 import msg from './modules/msg';
 */
// here we use SHARED message handlers, so all the contexts support the same
// commands. but this is NOT typical messaging system usage, since you usually
// want each context to handle different commands. for this you don't need
// handlers factory as used below. simply create individual `handlers` object
// for each context and pass it to msg.init() call. in case you don't need the
// context to support any commands, but want the context to cooperate with the
// rest of the extension via messaging system (you want to know when new
// instance of given context is created / destroyed, or you want to be able to
// issue command requests from this context), you may simply omit the
// `handlers` parameter for good when invoking msg.init()

console.log('LiveApp formify running...'); // eslint-disable-line no-console

/*
 msg.init('ct', handlers.create('ct'));

 console.log('jQuery version:', $().jquery); // eslint-disable-line no-console
 */

const form = {

  // Custom CSS Styles
  templates: {
    iframeContainer: `<div id='iframeContainer'></div>`,
    instructions   : `<div class='toggle-instructions'>` + // eslint-disable-line key-spacing
    `<span class='toggle-icon'> + </span> Click to toggle instructions
                      </div>
                      <br>`,
    venueIdClipped : `<span style='color: #61ca61; display: block;'>` +  // eslint-disable-line key-spacing
    `<br>Copied to clipboard!
                      </span>`
  },

  clearInstructions() {
    const formName = document.querySelector('.formName');
    formName.insertAdjacentHTML('afterend', this.templates.instructions);

    // Remove instruction block and assign toggle function
    document.querySelector('.formDescription').style.display = 'none';
    document.querySelector('.toggle-instructions').onclick = this.toggleInstructions;
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
  },

  descriptionLimit() {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    // Fixes formatting where descriptions are too long and screw up grid
    return [...document.querySelectorAll('.description')].forEach((d) => {
      d.textContent.length > 52 // eslint-disable-line no-unused-expressions
        ? d.parentElement.style.display = 'block'
        : null;
    });
  },

  removeUnwantedElements() {
    [document.querySelector('.formCoverImageContainer'),
      ...document.querySelectorAll('.createYourOwnFormWithAirtable')]
      .forEach(el => el ? el.remove() : null); // eslint-disable-line no-confusing-arrow
  },

  createIframe(type, link) {
    const iframe = document.createElement('iframe');
    iframe.className = `iframe-stacked ${type}`;
    iframe.src = link.startsWith('http') ? link : `http://${link}`;
    return iframe;
  },

  generateIframes(container) {
    const _getType = n => n.closest('.sharedFormField').firstElementChild.textContent.split('Venue ')[1].trim();

    [...document.querySelectorAll('.detailViewTextWithLinks a')].forEach((link, i) => {
      if (i === 3) {
        // May change in the future. For now this is the recurring event form link
        return Object.defineProperty(form, 'recurEventLink', { value: link.href });
      }
      return link.href ? container.prepend(this.createIframe(_getType(link), link.href)) : null;
    });
  },

  setIframes() {
    const formContainer = document.querySelector('.formFieldAndSubmitContainer');
    const formHeader = document.querySelector('.formHeader');

    formContainer.prepend(formHeader);
    formContainer.insertAdjacentHTML('afterend', this.templates.iframeContainer);

    // Methods for dynamically generating links
    return this.generateIframes(document.getElementById('iframeContainer'));
  },

  init() {
    // DOM JS Methods need to wait shortly after window for load
    this.clearInstructions();
    this.descriptionLimit();
    this.removeUnwantedElements();
    this.setIframes();
  }
};

// Inject a script to hijack the AirTable API calls
// Fires a custom window event when calls resolve
// Other methods for detecting DOM load/ready failed
AJAXListener.injectScript(AJAXListener.hijacker);

window.addEventListener('AirTableXHR::finished', () => {
  // Initialize settings
  // Prototypal object creation with object factory function
  const formFactoryFn = () => Object.create(form);
  const formify = formFactoryFn();
  // Apparently just need to open the thread up, so we use setTimeout
  return setTimeout(() => formify.init());
});
