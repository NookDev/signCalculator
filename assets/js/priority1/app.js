//SIGN OPTIONS VARIABLES
let sizeOfSign = document.getElementsByClassName('sizeOfSign').value;
let signOrientation = document.getElementsByClassName('signOrientation').value;
let signPadding = document.getElementsByClassName('signPadding').value;
let signColour = document.getElementsByClassName('signColour').value;
let doubleSided = document.getElementsByClassName('doubleSided').value;

//DEMO VARIABLES
let demoSign = document.getElementsByClassName('demoSign');
let demoGuides = document.getElementsByClassName('demoGuides');
let demoPadding = document.getElementsByClassName('demoPadding');
let hidePadding = document.getElementsByClassName('hidePadding').value;
let lineDistribution = document.getElementsByClassName('lineDistribution').value;

//LINE INPUT VARIABLES
let lineNumber = document.querySelectorAll('.lineNumber');
let letterLabel = document.getElementsByClassName('letterLabel');
let lineText = document.getElementsByClassName('lineText').value;
let lineFont = document.getElementsByClassName('lineFont').value;
let fullWidth = document.getElementsByClassName('fullWidth');
let letterHeight = document.getElementsByClassName('letterHeight');
let vinylColour = document.getElementsByClassName('vinylColour').value;
let invertColour = document.getElementsByClassName('invertColour').value;
let	addButton = document.querySelectorAll('.addLine');
let removeButton = document.querySelectorAll('.removeLine');

//OPTIONS VARIABLES
let signStands = document.getElementsByClassName('signStands').value;
let signQuantity = document.getElementsByClassName('signQuantity').value;
let signLocation = document.getElementsByClassName('signLocation').value;
let localPickup = document.getElementsByClassName('localPickup').value;

//SUMMARY VARIABLES TODO
let signWidth;
let signHeight;

//line variables
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
let signObject = { };
signObject.sizeOfSign = sizeOfSign;
signObject.signOrientation = signOrientation;
signObject.signPadding = signPadding;
signObject.signColour = signColour;
signObject.doubleSided = doubleSided;

//create object, add input values
let demoObject = { };
demoObject.demoSign = demoSign;
demoObject.demoGuides = demoGuides;
demoObject.demoPadding = demoPadding;
demoObject.lineNumber = lineNumber;
demoObject.hidePadding = hidePadding;
demoObject.lineDistribution = lineDistribution;

//create object, add input values
let lineObject = { };
lineObject.letterLabel = letterLabel;
lineObject.lineText = lineText;
lineObject.lineFont = lineFont;
lineObject.fullWidth = fullWidth;
lineObject.vinylColour = vinylColour;
lineObject.invertColour = invertColour;
lineObject.addButton = addButton;
lineObject.removeButton = removeButton;


//create object, add input values
let optionsObject = { };
optionsObject.signQuantity = signQuantity;
optionsObject.signLocation = signLocation;
optionsObject.localPickup = localPickup;
optionsObject.signStands = signStands;

//create object, add input values
let summaryObject = { };
summaryObject.numberOfLines = numberOfLines;
summaryObject.signWidth = signWidth;
summaryObject.signHeight = signHeight;


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

				<div class="input-container lineText">
				<label>Example Line ${lineCount} :</label>
				<input type="text" name="firstname" value="" class="line1">
				</div>

				<div class="input-container lineFont font">
				<label>Select Font</label>
				<select>
				<option value="Impact" selected>Impact</option>

				</select>
				</div>

				<div class="input-container fullWidth">
				<label>Full Width Text?</label>
				<input type="checkbox" name="full-width" value="full-width">
				<span class="label">Yes</span>
				</div>

				<div class="input-container letterHeight">
				<label>Letter Height (mm)</label>
				<input type="number" name="quantity" min="1" max="300" value="">
				</div>

				<div class="input-container vinylColour">
				<label>Colour</label>
				<input type="color" name="polymetric-colors" value="">
				</div>

				<div class="input-container invertColour">
				<label>Invert Colors?</label>
				<input type="checkbox" name="inverted" value="inverted">
				<span class="label">Yes</span>
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
	
  console.log('lineNumber = ' + lineNumber);
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


if (fullWidth == 'checked') {

	//letterHeight.style = "visibility : hidden";
	letterLabel.style = "text-decoration : strike-through";
	letterHeight.value = " ";

} else 
{

	//letterHeight.style = "visibility : visible";
	letterLabel.style = "text-decoration : unset";
}