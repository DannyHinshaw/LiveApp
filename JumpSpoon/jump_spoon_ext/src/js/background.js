/* eslint-env webextensions */
import handlers from './modules/handlers';
import msg from './modules/msg';


// here we use SHARED message handlers, so all the contexts support the same
// commands. in background, we extend the handlers with two special
// notification hooks. but this is NOT typical messaging system usage, since
// you usually want each context to handle different commands. for this you
// don't need handlers factory as used below. simply create individual
// `handlers` object for each context and pass it to msg.init() call. in case
// you don't need the context to support any commands, but want the context to
// cooperate with the rest of the extension via messaging system (you want to
// know when new instance of given context is created / destroyed, or you want
// to be able to issue command requests from this context), you may simply
// omit the `handlers` parameter for good when invoking msg.init()

console.log('BACKGROUND SCRIPT WORKS!'); // eslint-disable-line no-console

/**
 *  DEMO FOR MESSENGER
*/

// adding special background notification handlers onConnect / onDisconnect
function logEvent(ev, context, tabId) {
  console.log(`${ev}: context = ${context}, tabId = ${tabId}`); // eslint-disable-line no-console
}
handlers.onConnect = logEvent.bind(null, 'onConnect');
handlers.onDisconnect = logEvent.bind(null, 'onDisconnect');

const message = msg.init('bg');


/*
// issue `echo` command in 10 seconds after invoked,
// schedule next run in 5 minutes
function helloWorld() {
  console.log( // eslint-disable-line no-console
  '===== will broadcast "hello world!" in 10 seconds');
    setTimeout(() => {
    console.log('>>>>> broadcasting "hello world!" now'); // eslint-disable-line no-console
    message.bcast('echo', 'hello world!', () =>
      console.log('<<<<< broadcasting done') // eslint-disable-line no-console
    );
  }, 10 * 1000);
  setTimeout(helloWorld, 5 * 60 * 1000);
}

// start broadcasting loop
helloWorld();
*/

const HEADERS_TO_STRIP_LOWERCASE = [
  'content-security-policy',
  'x-frame-options',
  'x-xss-protection'
];

// Used to determine if formifier modified the url to google translate http/hack
const urlTranslateMod = 'https://translate.google.com/translate?sl=ja&tl=en&u=';

// Always try HTTPS first
chrome.webRequest.onBeforeRequest.addListener((details) => {
  console.log(details.url);

  const url = details.url.startsWith(urlTranslateMod) ?
    details.url.split(urlTranslateMod)[1] : details.url;
  console.log(url);
/*
  if (!details.url.startsWith('http://time.com/')) {
    return {redirectUrl: 'http://time.com'};
  }
*/
}, {
  urls: ['<all_urls>'],
  types: ['main_frame', 'sub_frame'],
}, [ 'blocking' ]);

// Listen for google 'SPRITE' requests
chrome.webRequest.onBeforeRequest.addListener(() => {
  return message.bcast(['ct'], 'g_translate_img_GET');
}, { urls: ['http://www.google.com/images/*.gif'] });

// CORS Support for iframes and XHR's
chrome.webRequest.onHeadersReceived.addListener((details) => { // eslint-disable-line arrow-body-style, max-len
  return {
    responseHeaders: details.responseHeaders.filter((header) => { // eslint-disable-line arrow-body-style, max-len
      return HEADERS_TO_STRIP_LOWERCASE.indexOf(header.name.toLowerCase()) < 0;
    })
  };
}, { urls: ['<all_urls>'] }, ['blocking', 'responseHeaders']);
