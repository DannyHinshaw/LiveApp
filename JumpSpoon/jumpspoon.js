// ==UserScript==
// @name         LiveApp - Jump & Spoon (Airtable Form)
// @icon         http://keycdn.mturkcrowd.com/data/avatars/l/0/132.jpg?1452627961
// @author       Danny Hinshaw
// @namespace    http://nulleffort.com/
// @version      0.1
// @description  Transforms Airtable form to UI
// @author       You
// @match        https://airtable.com/*?prefill_Venue%20ID=*
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest

// ==/UserScript==
/*jshint esnext: true */

(function() {
  'use strict';

  const form = {

	// Custom CSS Styles
	css : {
	  main: `
.formHeader {
padding: .5rem 2rem !important;
}
/* Reduce Margins on Task Fields*/
.sharedForm,
.sharedFormField {
border-top: 1px solid #dac0c0;
margin-top: 8px !important;
width: 100%;
}
/* Put Inputs on same line as Task Titles */
.sharedFormField {
display: inline-flex;
justify-content: space-between;
}
.cellContainer {
padding-top: .5rem;
width: 65%;
}
.description {
line-height: normal;
padding: .5rem;
}
/* Make Task Titles Bold */
.title {
font-weight: bolder;
padding-top: .5rem;
}
/* Reduce Font Size */
.title,
.description,
.validationMessage {
font-size: 12px !important;
}
.formSubmit {
margin-top: 1rem !important;
}
/* Hide the Airtable Ad footer */
.createYourOwnFormWithAirtable {
display: none;
}
/* Custom Added Elements*/
.toggle-instructions {
background-color: #97eaa2;
border-radius: 2em;
cursor: pointer;
font-size: 18px;
max-width: 17rem;
padding: 10px 2px 10px 2px;
}
.toggle-icon {
padding: .25rem .25rem .25rem .5rem;
}`,
	  splitView: `
/* Left align the form and reduce width*/
.formContent {
width: 100%;
}
.formHeader {
height: 5rem;
left: 0;
right: 0;
top: 0;
margin-left: 0;
max-width: 25rem;
}
.formFieldContainer,
.formSubmit {
margin-left: 0;
}
.formFieldAndSubmitContainer {
height:100vh;
left: 0;
max-width: 25rem;
min-width: 15rem;
overflow: auto;
position: fixed;
resize: horizontal;
right: 0;
top: 0;
}
#iframeContainer {
background-color: blue;
height:100vh;
left: 0;
margin: 4rem 0 0 29rem;
overflow-y: auto;
padding: .75rem;
position: fixed;
resize: horizontal;
top: 0;
width: 100%
}
`
	},
	templates: {
	  iframeContainer: `<div id="iframeContainer"></div>`,
	  instructions: `<div class="toggle-instructions"><span class="toggle-icon"> + </span> Click to toggle instructions</div><br>`,
	  venueIdClipped: `<span style="color: #61ca61; display: block;"><br>Copied to clipboard!</span>`
	},

	ajax(url) {
	  GM_xmlhttpRequest({
		method: 'GET',
		url: url,
		synchronous: true,
		onload(xhr) {
		  const r = xhr.responseText;
		  try{
			return xhr;
			// getTextGrunt(r);
		  }
		  catch(err){
			console.log(err);
			//console.log(r);
			return r;
		  }
		}
	  });

	},

	addCSS(styleSheet) {
	  const style = document.createElement('style');
	  style.type = 'text/css';
	  style.appendChild(document.createTextNode(styleSheet));
	  document.head.appendChild(style);
	},

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

	getVenueID() {

	  // Currently this input is the first input, may change in the future...
	  // for now this is the easiest way
	  GM_setClipboard(document.querySelector('input').value);
	  const venIdDesc = document.querySelectorAll('.description')[1];
	  venIdDesc.innerHTML += this.templates.venueIdClipped;
	},

	setIframe() {
	  const formContainer = document.querySelector('.formFieldAndSubmitContainer');
	  const formHeader = document.querySelector('.formHeader');

	  //this.wrapAll(formEls, wrapperDiv);
	  this.addCSS(this.css.splitView);
	  formContainer.prepend(formHeader);
	  formContainer.insertAdjacentHTML('afterend', this.templates.iframeContainer);

	  const test = this.ajax('https://airtable.com');
	  console.log(test);
	  // TODO: This is just a temp placeholder	  
	  /*
	  const iframe = document.createElement('iframe');
	  iframe.id = 'testIframe';
	  iframe.srcdoc = this.ajax('http://test.com');// 'https://jsbin.com';
	  document.getElementById('iframeContainer').prepend(iframe);
	  */
	},

	init() {
	  this.addCSS(this.css.main);

	  // DOM JS Methods need to wait shortly for load
	  setTimeout(() => {
		this.clearInstructions();
		this.descriptionLimit();
		this.getVenueID();
		this.setIframe();
	  }, 250);
	}

  };

  // Initialize settings
  console.log('running');
  const formFactoryFn = () => Object.create(form);
  const formify = formFactoryFn();
  formify.init();
})();
