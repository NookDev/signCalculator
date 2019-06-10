# signCalculator
Form that generates a preview of a coreflute sign and provides costings.

NOTE - SEE form-html.php and form-html.scss for example. This can be used as a starting point for adding the javascript functionality.


--------------------------------------------------------------------------------------------------------------------------------

PART 1 – SIGN DEMO.

--------------------------------------------------------------------------------------------------------------------------------
OVERVIEW.

The goal is for the user to create the sign on the go using the provided inputs so they can see how it looks before purchasing.
The user fills in the inputs and a visual representation of the sign is displayed on the page. The representation will be dynamically updated upon change to any input, without the page reloading (eg ajax or similar). 
User inputs to be stored in browser for subsequent visits to site.
Any inputs not used are hidden in the summaries.
No additional CSS styling of the form required other than what is required for functionality.


--------------------------------------------------------------------------------------------------------------------------------
INPUTS - Sign Options

1. Input for sign size selection:
	This will create a ‘canvas’ for the sign, the canvas must have padding and the text added must not exceed the width or height of the canvas minus padding. 

	If the text overflows the padding a warning must be given below the relevant text input that the text exceeds the available canvas width or height.

	a. Dimensions.
	- 200mm x 300mm,
	- 400mm x 600mm (default),
	- 600mm x 800mm.

	b. Orientation.
	- Horizontal (default),
	- Vertical.

	c. Padding.
	- minimum 25mm (default),
	- customizable with slider or input.
	- checkbox show / hide padding (default hidden)

	d. Sign Colour.
	- White (default),
	- Black,
	- Red, Blue, Green, Yellow.
	
	d. Couble Sided (checkbox).
	- Unchecked (default)
	- Yes



--------------------------------------------------------------------------------------------------------------------------------
INPUTS - Sign Text

2. Inputs:
	The user inputs the text for each line of the sign. By default there is one line with a button to add additional lines. 
For each line the user can edit the text, choose the height of the lettering in mm or choose to have text the full width from padding to padding and choose the color and invert the color.

	If text exceeds width or height of the canvas minus padding a warning is given (and the form cannot submit). 

	If extra lines will not fit at any time, display text below the line in red, informing user ‘this line exceeds the available space and will not be visible’. For example if a lines size is increased pushing the line below off the canvas.

	FOR EACH LINE:

	a. Enter Text – Text Input, one line only, no wrap, default ‘Enter your text here’, line number dynamically updates with each new line added.
	
	b. Text Font – Dropdown with all Google Fonts available (alphabetical order).
	Name of font to be in font eg. Book Antiqua is the font Book Antiqua. Text in demostration updated on selection change. Font selection is Google Fonts. 

	b. Letter Height – Number Input (mm) minimum 20mm, default 30mm.
	
	c. Full width ? – Override Letter Height (strikethrough letter height label abd clear input field) .

	d1. Color – colorpicker (names as per color chart).
	The color of the text will be updated in the demonstration upon selection of a color.
	Include all the colors in the chart (see NookDigitalMarketing-Polymetric-Vinyl.JPG) as dropdown list with color name it’s  actual color eg. Deep Red is the color Deep Red. Open to discussing alternatives is you think there is a better way.
	Default: black.

	d2. Invert Color? (default: unchecked) - font color same as sign color, letter background font color. Expands past padding to edge of sign.
			
	e. Add Another Line 
	
	f. Remove Line
	
			
			
--------------------------------------------------------------------------------------------------------------------------------
INPUTS - Sign Demo

2. Inputs and features for Sign demo.

	a. FEATURES 	- Overflow hidden
			- padding and lettering to scale with dimensions of sign (mm),
			- removable padding guides,
			- update on any input changes (no page reload).
	
	b. Hide padding guides, unchecked, default - No.

	c. Distribute content (flexbox: space-between, space-around, space-evenly).
	
	


--------------------------------------------------------------------------------------------------------------------------------
INPUTS - Order Options

3. Inputs for additional options.
	
	a. Quantity of signs (default 10).

	b. Sign stands? (Default : no):

	Yes -  Quantity:
	- Same number as number of signs (default),
	- user input number.

	No > Hide any related info.

	c. State (all states, default Western Australia):
		a. If WA show Local Pickup Checkbox (hidden by default)
	

	c. Postcode (default blank) - hide is local pickup chosen.


--------------------------------------------------------------------------------------------------------------------------------
Table - Order Summary

4. Summary of the order.

	a. Size,
	b. Orientation, 
	c. Padding,
	d. Number of lines,
	e. Colour,
	f. Double-sided (default hidden),
	g. Quantity,
	h. Stands (default hidden).
	
	
	For Each Line:
	a. Text
	b. Font,
	C. Full Width? (default hidden),
	e. Letter Height (hide if full width chosen),
	f. Colour,
	g. Inverted Colour? (default hidden)
	
	
--------------------------------------------------------------------------------------------------------------------------------
Table - Pricing Summary

4. Summary of the Costs presented in table. Display the total cost of the order, itemised to include all inputs with a price, if any input is 0 or empty do not display in total.

	
	a. For Each Sign:
		- Color of Sign; $cost
		- Number of lines; $cost,
		- Number of Colours; $cost,
		- Double-sided (default hidden); $cost,
		- Quantity; $cost,
		- Stands (default hidden) $cost.
	
	
	b. For Sign Totals:
		- Color of Sign; $cost
		- Number of lines; $cost,
		- Number of Colours; $cost,
		- Double-sided (default hidden); $cost,
		- Quantity; $cost,
		- Stands (default hidden) $cost.
	
--------------------------------------------------------------------------------------------------------------------------------
Inputs - Customer Details

4. Contact details for user.
	
	a. Name,
	
	b. Email,
	
	c. Delivery Address,
	
	d. Phone,
	
	e. Message.


--------------------------------------------------------------------------------------------------------------------------------
Inputs - Submit Form

5. Send form with all info.

	a. Display warning and prevent sending if a line is outside the padding or overlapping another line.
	
	b. Submit form if no errors.


--------------------------------------------------------------------------------------------------------------------------------

PART 2 – Pricing / Figures.

--------------------------------------------------------------------------------------------------------------------------------
OVERVIEW.
Data for inputs.

I will modify the pricing in the code you deliver as required, placeholder pricing below. 
Pricing to be updated dynamically on input changes.

--------------------------------------------------------------------------------------------------------------------------------
SIGN PRICING:

1. Size Selection.
- 300mm x 450mm: $10.00 per sign,
- 450mm x 600m: $15.00 per sign,
- 600mm x 900mm: $20.00 per sign,
- 1200mm x 1800mm: $30.00 per sign.

2. Colour.
- White: $0,
- Black : +$0.50
- All other colours : +$1.00

3. Stands.
- 1 stand: $2.50,
- 2-9 stands: $2.50 ea,
- 10 - 19 stands: $2.00 ea,
- 20 - 50 stands:  $1.80 ea,
- 50+ stands: $1.50 ea.


3. Number of vinyl colors (max 3).
- 1 color:  $0.00,
- 2 colors: +$2.50 per sign,
- 3 colors: +$5.00 per sign.

4. Number of lines.
- 1-3:  $0.00,
- 4-5: +$2.50 per sign.
- 6+: +$5.00 per sign.

5. Quantity.
- 1 sign: 0% discount,
- 2-9 signs: 5% discount,
- 10 - 19 signs: 10% discount,
- 20 - 50 signs: 15% discount,
- 50+ signs: 20% discount.

--------------------------------------------------------------------------------------------------------------------------------
SHIPPING PRICING:

Local pickup: +$0.00.

Delivery to each state:  
- WA +$12.00, 
- VIC +$15.00, 
- NSW +$17.00, 
- TAS +$19.00, 
- NT +$20.00, 
- SA +$22.00, 
- ACT +$25.00.

Stands: 
- if local delivery $0.00,
- 1 stand: +$2.50,
- 2-9 stands: +$5.00,
- 10 - 19 stands: +$7.50,
- 20 - 49 stands:  +$10.00,
- 50+ stands: +$15.00.

--------------------------------------------------------------------------------------------------------------------------------
LAYOUT SUMMARY:
Markup presented in this order:

1. Sign inputs.


2. Demo of sign (updated on input change without reloading page).


3. Summary of selected design choices:

	- Size of sign:

	- For each line:
		- Text,
		- Size,
		- Color,
		- Font.

	- Quantity of Signs:

	- Number of stands: (hide if 0)


4. Summary of Totals:

	- Cost per sign,
	- Total cost of signs.

	- Cost per stand (hide if 0),
	- Total cost of stands (hide if 0).

	- Sub total: signs + stands.

	- Shipping Total.

	- Grand Total: sub total + shipping total.

	- Total includes GST of (10% of grand total).




