import { AJAXListener } from './modules/ajax-listener';
import { UI } from './modules/airtable-formifier';
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
console.log('LiveApp formifier running...'); // eslint-disable-line no-console
/*
 msg.init('ct', handlers.create('ct'));
 console.log('jQuery version:', $().jquery); // eslint-disable-line no-console
 */

// Wait for AirTable to finish various AJAX calls
async function waitForAJAX() {
  try {
    await AJAXListener.injectScript();
    await AJAXListener.loadEvent();
    await window.removeEventListener('AirTableXHR::finished', AJAXListener.loadEvent, false);
    // Initialize settings
    // Prototypal object creation with object factory function
    return Object.create(UI);
  } catch (e) {
    return e;
  }
}

// Initi
waitForAJAX()
  .then(formifier => formifier.init())
  .catch(console.log.bind(console)); // eslint-disable-line no-console
