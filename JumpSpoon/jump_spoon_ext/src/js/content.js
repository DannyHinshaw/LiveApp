 import handlers from './modules/handlers';
 import msg from './modules/msg';

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

console.log('CONTENT SCRIPT WORKS!'); // eslint-disable-line no-console

/*
msg.init('ct', handlers.create('ct'));

console.log('jQuery version:', $().jquery); // eslint-disable-line no-console
*/



const form = {

  // Custom CSS Styles
  templates: {
    iframeContainer: `<div id="iframeContainer"></div>`,
    instructions: `<div class="toggle-instructions">
                      <span class="toggle-icon"> + </span> Click to toggle instructions
                    </div>
                    <br>`,
    venueIdClipped: `<span style="color: #61ca61; display: block;"><br>Copied to clipboard!</span>`
  },

  /*
   addCSS(styleSheet) {
   const style = document.createElement('style');
   style.type = 'text/css';
   style.appendChild(document.createTextNode(styleSheet));
   document.head.appendChild(style);
   },
   */

  clearInstructions() {
    const formName = document.querySelector('.formName');
    formName.insertAdjacentHTML("afterend", this.templates.instructions);

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

    // Fixes formatting where descriptions are too long and screw up grid
    [...document.querySelectorAll('.description')].forEach(d => {
      return d.textContent.length > 52 ? d.parentElement.style.display = 'block' : null;
    });
  },

/*
  getVenueID() {

    // Currently this input is the first input, may change in the future...
    // for now this is the easiest way
    // TODO: Replacement for copy/pasta
    // GM_setClipboard(document.querySelector('input').value);
    const venIdDesc = document.querySelectorAll('.description')[1];
    venIdDesc.innerHTML += this.templates.venueIdClipped;
  },
*/

  setIframe() {
    const formContainer = document.querySelector('.formFieldAndSubmitContainer');
    const formHeader = document.querySelector('.formHeader');

    //this.wrapAll(formEls, wrapperDiv);
    // this.addCSS(this.css.splitView);
    formContainer.prepend(formHeader);
    formContainer.insertAdjacentHTML('afterend', this.templates.iframeContainer);

    // const test = this.ajax('https://jsfiddle.net/');
    // console.log(test);
    // TODO: This is just a temp placeholder

    const iframe = document.createElement('iframe');
    iframe.id = 'testIframe';
    iframe.src = document.querySelectorAll('.detailViewTextWithLinks a')[0].href;// testthis.ajax('http://test.com');// 'https://jsbin.com';
    document.getElementById('iframeContainer').prepend(iframe);

  },

  init() {
    //this.addCSS(this.css.main);

    // DOM JS Methods need to wait shortly for load
    setTimeout(() => {
      this.clearInstructions();
      this.descriptionLimit();
      // this.getVenueID();
      this.setIframe();
    }, 250);
  }

};

// Initialize settings
console.log('running'); // eslint-disable-line no-console
const formFactoryFn = () => Object.create(form);
const formify = formFactoryFn();
formify.init();
