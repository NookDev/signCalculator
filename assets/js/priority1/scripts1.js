//value objects
let signObject;
let demoObject;
let lineObject;
let optionsObject;
let summaryObject;

// *** SIGN OPTIONS *** //

//sizeOfSign
let sizeOfSign = document.querySelector('.sizeOfSign');
let sizeOfSignValue = sizeOfSign.options[sizeOfSign.selectedIndex].value;
(function(){
	sizeOfSign.onchange = function(){
		sizeOfSignValue = sizeOfSign.options[sizeOfSign.selectedIndex].value;
		console.log('sizeOfSignvalue = '+sizeOfSignValue);
	}
})();
//let sizeOfSignText = sizeOfSign.options[sizeOfSign.selectedIndex].text;
//debugging
//console.log('sizeOfSign '+sizeOfSign);
//console.log('sizeOfSigntext = '+sizeOfSignText);
console.log('sizeOfSignvalue = '+sizeOfSignValue);



//signOrientation
let signOrientation = document.querySelectorAll('input[name="signOrientation"]');
let signOrientationValue;
(function signOrientationCheck() {
	
	 // loop through list of radio buttons
	for (let i=0; i < signOrientation.length; i++) {
		
		signOrientation[i].onchange = function(){
			signOrientationUpdate()
		};
	}
	
	function signOrientationUpdate() {

		 // loop through list of radio buttons
    	for (let i=0; i < signOrientation.length; i++) {

        	if ( signOrientation[i].checked ) { // radio checked?
				signOrientationValue = signOrientation[i].value; 
        	}
    	}
		//debugging
		console.log('signOrientationValue = '+signOrientationValue);
	}
	signOrientationUpdate();
})();


//signPadding
let signPadding = document.querySelector('.signPadding');
let signPaddingValue = document.querySelector('input[name="signPadding"]').value;
document.querySelector('.signPaddingLabel').innerHTML = signPaddingValue; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
signPadding.oninput = function() {
  document.querySelector('.signPaddingLabel').innerHTML = this.value;
	
	//update
	signPaddingValue = this.value;
	
	//debugging
	console.log('signPadding = '+signPaddingValue);	
}
//debugging
console.log('signPaddingValue = '+signPaddingValue);


//signColour
let signColour = document.querySelector('.signColour');
let signColourValue = signColour.options[signColour.selectedIndex].value;
(function(){
	signColour.onchange = function(){
		signColourValue = signColour.options[signColour.selectedIndex].value;
		console.log('signColourValue = '+signColourValue);
	}
})();
console.log('signColourValue = '+signColourValue);


//doubleSided
let doubleSided = document.querySelector('.doubleSided');
let doubleSidedValue;
(function doubleSidedCheck() {
	
document.querySelector('.doubleSided').onchange = function() {doubleSidedUpdate()};
	
	function doubleSidedUpdate() {
		doubleSidedValue = document.querySelector('.doubleSided').checked;

		if (doubleSidedValue == true){
			doubleSidedValue = 'Yes';
		}else if (doubleSidedValue == false){
			doubleSidedValue = 'No';
		}
		//debugging
		console.log('doubleSidedValue = '+doubleSidedValue);
	}
	doubleSidedUpdate();
	
	
document.querySelector(".doubleSidedLabel").innerHTML = 'Yes';
})();


//store values
(function createSignObject(){
	
	//create object, add input values
	signObject = { };
	signObject.sizeOfSign = sizeOfSignValue;
	signObject.signOrientation = signOrientationValue;
	signObject.signPadding = signPaddingValue;
	signObject.signColour = signColourValue;
	signObject.doubleSided = doubleSidedValue;
	
	let signObjectKeys = Object.keys(signObject);
	let signObjectValues = Object.values(signObject);
	let signObjectEntries = Object.entries(signObject);
	
	//debugging
	//console.log('entrie ='+signObject.sizeOfSign);
		
})();



// ***  DEMO VARIABLES *** //

let demoSign = document.getElementsByClassName('demoSign');
let demoGuides = document.getElementsByClassName('demoGuides');
let demoPadding = document.getElementsByClassName('demoPadding');

//LINE INPUT VARIABLES

//hidePadding
let hidePadding = document.querySelector('.hidePadding');
let hidePaddingValue;
(function hidePaddingCheck() {
	
document.querySelector('.hidePadding').onchange = function() {hidePaddingUpdate()};
	
	function hidePaddingUpdate() {
		hidePaddingValue = document.querySelector('.hidePadding').checked;

		if (hidePaddingValue == true){
			hidePaddingValue = 'Yes';
		}else if (hidePaddingValue == false){
			hidePaddingValue = 'No';
		}
		//debugging
		console.log('hidePaddingValue = '+hidePaddingValue);
	}
	hidePaddingUpdate();

})();


//lineDistribution
let lineDistribution = document.querySelectorAll('input[name="lineDistribution"]');
let lineDistributionValue;
(function lineDistributionCheck() {
	
	 // loop through list of radio buttons
	for (let i=0; i < lineDistribution.length; i++) {
		
		lineDistribution[i].onchange = function(){
			lineDistributionUpdate()
		};
	}
	
	function lineDistributionUpdate() {

		 // loop through list of radio buttons
    	for (let i=0; i < lineDistribution.length; i++) {

        	if ( lineDistribution[i].checked ) { // radio checked?
				lineDistributionValue = lineDistribution[i].value; 
        	}
    	}
		//debugging
		console.log('lineDistributionValue = '+lineDistributionValue);
	}
	lineDistributionUpdate();
})();


//create object, add input values
(function createDemoObject(){
	let demoObject = { };
	demoObject.demoSign = demoSign;
	demoObject.demoGuides = demoGuides;
	demoObject.demoPadding = demoPadding;
	demoObject.hidePadding = hidePaddingValue;
	demoObject.lineDistribution = lineDistributionValue;
})();


// *** LINE INPUT VARIABLES *** //

//lineNumber
let lineNumber = document.querySelectorAll('.lineNumber');
let lineNumberValue = lineNumber.length;
//debugging
console.log('lineNumberValue = '+lineNumberValue);

//lineText
let lineText = document.querySelector('.lineText');
let lineTextValue = document.querySelector('input[name="lineText"]').value;
//debugging
console.log('lineTextValue = '+lineTextValue);
lineText.addEventListener("keyup", liveTextFunction);
function liveTextFunction(){
	lineTextValue = document.querySelector('input[name="lineText"]').value;
	//debugging
	console.log('lineTextValue = '+lineTextValue);
	
}

//lineFont;
let lineFont = document.querySelector('.lineFont');
let lineFontValue = lineFont.options[lineFont.selectedIndex].value;
(function(){
	lineFont.onchange = function(){
		lineFontValue = lineFont.options[lineFont.selectedIndex].value;
		console.log('lineFontValue = '+lineFontValue);
	}
})();
console.log('lineFontValue = '+lineFontValue);


//fullWidth
let fullWidth = document.querySelector('.fullWidth');
let fullWidthValue;
(function fullWidthCheck() {
	
document.querySelector('.fullWidth').onchange = function() {fullWidthUpdate()};
	
	function fullWidthUpdate() {
		fullWidthValue = document.querySelector('.fullWidth').checked;

		if (fullWidthValue == true){
			fullWidthValue = 'Yes';
		}else if (fullWidthValue == false){
			fullWidthValue = 'No';
		}
		//debugging
		console.log('fullWidthValue = '+fullWidthValue);
	}
	fullWidthUpdate();
	
	
document.querySelector(".fullWidthLabel").innerHTML = 'Yes';
})();


//letterHeight
let letterHeight = document.querySelector('.letterHeight');
let letterHeightValue = document.querySelector('input[name="letterHeight"]').value;
//debugging
console.log('letterHeightValue = '+letterHeightValue);
letterHeight.addEventListener("keyup", letterHeightFunction);
function letterHeightFunction(){
	letterHeightValue = document.querySelector('input[name="letterHeight"]').value;
	//debugging
	console.log('letterHeightValue = '+letterHeightValue);
	
}


//vinylColour;
let vinylColour = document.querySelector('input[name="vinylColour"]');
let vinylColourValue = vinylColour.value;
(function(){
	vinylColour.onchange = function(){
		vinylColourValue = vinylColour.value;;
		console.log('vinylColourValue = '+vinylColourValue);
	}
})();
console.log('vinylColourValue = '+vinylColourValue);


//invertColour
let invertColour = document.querySelector('.invertColour');
let invertColourValue;
(function invertColourCheck() {
	
document.querySelector('.invertColour').onchange = function() {invertColourUpdate()};
	
	function invertColourUpdate() {
		invertColourValue = document.querySelector('.invertColour').checked;

		if (invertColourValue == true){
			invertColourValue = 'Yes';
		}else if (invertColourValue == false){
			invertColourValue = 'No';
		}
		//debugging
		console.log('invertColourValue = '+invertColourValue);
	}
	invertColourUpdate();
	
	
document.querySelector(".invertColourLabel").innerHTML = 'Yes';
})();


let	addButton = document.querySelectorAll('.addLine');
let removeButton = document.querySelectorAll('.removeLine');


//store values
(function createLineObject(){
	let lineObject = { };
	lineObject.lineNumber = lineNumberValue;
	lineObject.lineText = lineTextValue;
	lineObject.lineFont = lineFontValue;
	lineObject.fullWidth = fullWidthValue;
	lineObject.letterHeight = letterHeightValue;
	lineObject.vinylColour = vinylColourValue;
	lineObject.invertColour = invertColourValue;
})();


// *** OPTIONS VARIABLES *** //

//signStands
let signStands = document.querySelectorAll('input[name="signStands"]');
let signStandsValue;
(function signStandsCheck() {
	
	 // loop through list of radio buttons
	for (let i=0; i < signStands.length; i++) {
		
		signStands[i].onchange = function(){
			signStandsUpdate()
		};
	}
	
	function signStandsUpdate() {

		 // loop through list of radio buttons
    	for (let i=0; i < signStands.length; i++) {

        	if ( signStands[i].checked ) { // radio checked?
				signStandsValue = signStands[i].value; 
        	}
    	}
		//debugging
		console.log('signStandsValue = '+signStandsValue);
	}
	signStandsUpdate();
})();




//signQuantity;
let signQuantity = document.querySelector('.signQuantity');
let signQuantityValue = document.querySelector('input[name="signQuantity"]').value;
//debugging
console.log('signQuantityValue = '+signQuantityValue);
signQuantity.addEventListener("keyup", signQuantityFunction);
function signQuantityFunction(){
	signQuantityValue = document.querySelector('input[name="signQuantity"]').value;
	//debugging
	console.log('signQuantityValue = '+signQuantityValue);
	
}


//signLocation;
let signLocation = document.querySelector('.signLocation');
let signLocationValue = signLocation.options[signLocation.selectedIndex].value;
(function(){
	signLocation.onchange = function(){
		signLocationValue = signLocation.options[signLocation.selectedIndex].value;
		console.log('signLocationValue = '+signLocationValue);
	}
})();
console.log('signLocationValue = '+signLocationValue);



//localPickup
let localPickup = document.querySelector('.localPickup');
let localPickupValue;
(function localPickupCheck() {
	
document.querySelector('.localPickup').onchange = function() {localPickupUpdate()};
	
	function localPickupUpdate() {
		localPickupValue = document.querySelector('.localPickup').checked;

		if (localPickupValue == true){
			localPickupValue = 'Yes';
		}else if (localPickupValue == false){
			localPickupValue = 'No';
		}
		//debugging
		console.log('localPickupValue = '+localPickupValue);
	}
	localPickupUpdate();
	
	
document.querySelector(".localPickupLabel").innerHTML = 'Yes';
})();

//store values
(function createOptionsObject(){
	let optionsObject = { };
	optionsObject.signQuantity = signQuantityValue;
	optionsObject.signLocation = signLocationValue;
	optionsObject.localPickup = localPickupValue;
	optionsObject.signStands = signStandsValue;
})();

//// *** SUMMARY VARIABLES TODO *** //

let signWidth;
let signHeight;

//create object, add input values
(function createSummaryObject(){
	let summaryObject = { };
	summaryObject.numberOfLines = numberOfLines;
	summaryObject.signWidth = signWidth;
	summaryObject.signHeight = signHeight;
})();


// *** LINE VARIABLES  *** //

//let lineNumber = document.querySelectorAll('.lineNumber');
let accordionTitle = document.getElementsByClassName('accordion-title');
let numberOfLines = lineNumber.length; 
let lastLine = lineNumber[numberOfLines - 1];
let firstLine = lineNumber[0];
//let	addButton = document.querySelectorAll('.addLine');
//let	removeButton = document.querySelectorAll('.removeLine');
let firstLineAddButton = 	firstLine.querySelector('.addLine');	
let	firstLineRemoveButton = firstLine.querySelector('.removeLine');
let	lastLineAddButton = lastLine.querySelector('.addLine');
let lastLineRemoveButton = lastLine.querySelectorAll('.removeLine');
let lineOptions;
 
const accordionItems = document.querySelectorAll('.accordion-item');
const accordionContentPanes = document.querySelectorAll('.accordion-content');

//create object, add input values
(function createLineObject(){
	let lineObject = { };
	lineObject.lineNumber = lineNumberValue;
	lineObject.lineText = lineTextValue;
	lineObject.lineFont = lineFontValue;
	lineObject.fullWidth = fullWidthValue;
	lineObject.vinylColour = vinylColourValue;
	lineObject.invertColour = invertColourValue;
	lineObject.addButton = addButton;
	lineObject.removeButton = removeButton;
})()



//all value objects in an array
let allValues = [ signObject, demoObject, lineObject, optionsObject, summaryObject ];


//GET LINE DATA ON ADD / REMOVE LINE
function lineLoop(){
	
	for (let i = 0; i < addButton.length; i++) {
		addButton[i].addEventListener("click", getLineData, false);
	}
	
	for (let i = 0; i < removeButton.length; i++) {
		removeButton[i].addEventListener("click", getLineData, false);
	}
	}

let allLineObjects = [];

//for each instance of line
function getLineData(){

		for (let i = 0; i < lineNumber.length; ++i){

			//push each line object into the array
			allLineObjects.push(lineObject[i]);
			
			//lineObject[i] = allLineObjects;
			
			console.log('allLineObjects :' + allLineObjects)
		}
};

//SIGN OPTIONS FUNCTIONS
(function(){
	
	if (hidePadding == 'checked') {

		demoPadding.style = "visibility : none";

	} else {

		demoPadding.style = "visibility : visible";
	}
})();


//SIGN LINES


//line functions
(function lineGeneration(){
	
		//html
		insertLineHTML();

		//no remove button when one line
		firstLineRemoveButton.style = "visibility: hidden;";

		//add or remove lines
		document.addEventListener('click', function(e) {
			
				//this
				let self = e.target;

				// has class .addLine
				if (hasClass(e.target, 'addLine')) {

					//hide add button of latest line
					self.style = "visibility: hidden;";
					
					//console.log(self.classList);
					
					//clone new line after the last line
					lastLine.parentElement.appendChild(lineOptions.cloneNode(true));
					
					//set display to block for accordion toggle
					lastLine.nextElementSibling.lastChild.style.display = "block";
					
					refreshLineNodeList();
					
					// has class .removeLine
					} else if (hasClass(e.target, 'removeLine')) {

							//remove lineNumber parent of removeButton
							self.parentElement.parentElement.parentElement.parentElement.remove();
						
							refreshLineNodeList();

					}

		});

		//combine accordion / refresh
		function refreshLineNodeList(){
			
			//refresh number of elements in nodelist
			lineNumber = document.querySelectorAll('.lineNumber');

			//get new length
			numberOfLines = lineNumber.length; 

			//update line buttons
			refreshLines();

			//update eventListener
			//accordionFunction();
};
	
		//refresh buttons when line added / removed
		function refreshLines(){
				 firstLine = lineNumber[0];
				 lastLine = lineNumber[numberOfLines - 1];
				 addButton = document.querySelectorAll('.addLine')
				 firstLineAddButton = 	firstLine.querySelector('.addLine');	
				 firstLineRemoveButton = firstLine.querySelector('.removeLine');
				 lastLineAddButton = lastLine.querySelector('.addLine');
				 lastLineRemoveButton = lastLine.querySelectorAll('.removeLine');

				//no remove button when one line
				firstLineRemoveButton.style = "visibility: hidden;";

				//always an add button on the last line
				lastLineAddButton.style = "visibility: visible;";

				if (numberOfLines > 1 ){
					firstLineRemoveButton.style = "visibility: visible;";
					firstLineAddButton.style = "visibility: hidden;";
				}
				if (numberOfLines == 1 ){

					firstLineRemoveButton.style = "visibility: hidden;";

					//add button on the first line if only line
					firstLineAddButton.style = "visibility: visible;";

				};

				//ensure there is always an add button on the last line
				let newLastLineAddButton = lastLine.querySelector('.addLine');
				//the key
				newLastLineAddButton.style = "visibility : visible";

};

		//show hide accordion
		(function accordionFunction(){
					
			//for (let i = 0; i < numberOfLines; i++) {
			document.addEventListener('click', function (e){

				// has class .accordion-title
				if (hasClass(e.target, 'accordion-title')) {
						//accordionTitle[i].addEventListener("click", function(event) {

						//this
						let self = event.target;

						/* Toggle between adding and removing the "active" class,
						to highlight the button that controls the panel */
						self.classList.toggle("active");

						console.log('this.classList = '+self.classList);
						console.log('accordionTitle = '+accordionTitle);
						//refresh

						/* Toggle between hiding and showing the active panel */
						let panel = self.nextElementSibling;

						if (panel.style.display === "block") {
							panel.style.display = "none";

						} else {
							panel.style.display = "block";
						}		


					}
			})
		})()

		//line html and vars
		function insertLineHTML(){
		let lineCount = 'placeholder';
		lineOptions = document.createElement('div');

		lineOptions.setAttribute('class', 'lineNumber accordion-item');
		lineOptions.innerHTML = `	
				<div class="accordion-title">
				<h3>Line ${lineCount}</h3>
				<div class="chevron">
				<svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow"><title>cheveron down</title><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
				</div>
				</div>

				<div class="input-section accordion-content">	

				<div class="input-row">

				<div class="input-container">
				<label>Example Line ${lineCount} :</label>
				<input type="text" name="lineText" value="" class="lineText">
				</div>

				<div class="input-container  font">
				<label>Select Font</label>
				<select class="lineFont">
				<option value="Impact" selected>Impact</option>

				</select>
				</div>

				<div class="input-container">
				<label>Full Width Text?</label>
				<input type="checkbox" name="fullWidth" value="full width" class="fullWidth">
				<span class="label">Yes</span>
				</div>

				<div class="input-container">
				<label class="letterHeightLabel">Letter Height (mm)</label>
				<input type="number" name="letterHeight" min="1" max="300" value="" class="letterHeight">
				</div>

				<div class="input-container">
				<label>Colour</label>
				<input type="color" name="vinylColour" value="" class="vinylColour">
				</div>

				<div class="input-container">
				<label>Invert Colors?</label>
				<input type="checkbox" name="invertColour" value="inverted" class="invertColour">
				<span class="invertColourLabel"></span>
				</div>

				</div>

				<div class="input-row">

				<div class="button-container">
				<div class="warning"></div>
				<button class="addLine">Add Another Line</button>
				<button class="removeLine">Remove This Line</button>
				</div>
				</div>
				</div>`;
		}
	
})();


//debugging function
(function testFunction(){
let button = document.getElementById('test');
	
  //console.log('lineNumber = ' + lineNumber);
	console.log('numberOfLines = ' + numberOfLines);
	
	button.addEventListener( "click", testFunction );
})();


//does the element have the class specified?
function hasClass(elem, className) {
      return elem.classList.contains(className);
}
//add a class
function addClass(el, unWantedClass) {
	el.classList.add(unWantedClass);
}
//remove a class
function removeClass(el, unWantedClass) {
	el.classList.remove(unWantedClass);
}

let letterHeightLabel = document.querySelector('.letterHeightLabel');

if (fullWidth == 'checked') {

	//letterHeight.style = "visibility : hidden";
	letterHeightLabel.style = "text-decoration : strike-through";
	letterHeight.value = " ";

} else 
{

	//letterHeight.style = "visibility : visible";
	letterHeightLabel.style = "text-decoration : unset";
}