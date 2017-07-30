import { AJAXListener } from './modules/ajax-listener';
import { AirTableFormifier } from './modules/airtable-formifier';
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

// Inject a script to hijack the AirTable API calls
// Fires a custom window event when calls resolve
// Other methods for detecting DOM load/ready failed
AJAXListener.injectScript(AJAXListener.hijacker);

window.addEventListener('AirTableXHR::finished', () => {
  // Initialize settings
  // Prototypal object creation with object factory function
  const formFactoryFn = () => Object.create(AirTableFormifier);
  const formifier = formFactoryFn();
  // Apparently just need to open the thread up, so we use setTimeout
  return setTimeout(() => formifier.init());
});
