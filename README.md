# signCalculator
Form that generates a preview of a coreflute sign and provides costings.

NOTE - ONLY THE INPUTS DESCRIBED ARE REQUIRED, EXAMPLE PROVIDED AS VISUAL REFERENCE ONLY:
https://www.letterstickers.com.au/lettering-design?gclid=CjwKCAjw27jnBRBuEiwAdjQXDCu11uTJZuxwznx6MgeInX2vIpcdNbJOGZJkgntl-rmz-t9yNFBOkBoCeFwQAvD_BwE

--------------------------------------------------------------------------------------------------------------------------------

PART 1 – SIGN DEMO.

--------------------------------------------------------------------------------------------------------------------------------
OVERVIEW.

The goal is for the user to create the sign on the go using the provided inputs so they can see how it looks before purchasing.
The user fills in the inputs and a visual representation of the sign is displayed on the page. The representation will be dynamically updated upon change to any input, without the page reloading (eg ajax or similar). 
User inputs to be stored in browser for subsequent visits to site.
No additional CSS styling of the form required.


--------------------------------------------------------------------------------------------------------------------------------
INPUTS

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

	c. Padding (width and height).
	- minimum 25mm (default),
	- customizable with slider or input.
	- checkbox show / hide padding (default hidden)

	d. Sign Colour.
	- White (default),
	- Black,
	- Red, Blue, Green, Yellow.

--------------------------------------------------------------------------------------------------------------------------------
2. Input for Sign Text:
	The user inputs the text for each line of the sign. By default there is one line with a button to add additional lines. 
For each line the user can edit the text, change the line height, choose the height of the lettering in mm and choose the color.

	If text exceeds width or height of the canvas minus padding a warning is given (and the form cannot submit). 

	If extra lines will not fit at any time, display text below the line in red, informing user ‘this line exceeds the available space and will not be visible’. For example if a lines size is increased pushing the line below off the canvas.

	FOR EACH LINE:

	a. Enter Text – Text Input, one line only, no wrap, default ‘Enter your text here’.

	b. Letter Height – Number Input (mm) minimum 20mm, default 30mm.

	c. Line Height – default 1.5 (minimum), increase / decrease input.

	d1. Color – colorpicker (names as per color chart).
	The color of the text will be updated in the demonstration upon selection of a color.
	Include all the colors in the chart (see NookDigitalMarketing-Polymetric-Vinyl.JPG) as dropdown list with color name it’s  actual color eg. Deep Red is the color Deep Red. Open to discussing alternatives is you think there is a better way.
	Default: black.

	d2. Invert Color? (default: unchecked) - font color same as sign color, letter background font color. Expand past padding.
	
	e. Text Font – Dropdown with all Google Fonts available (alphabetical order).
	Name of font to be in font eg. Book Antiqua is the font Book Antiqua. Text in demostration updated on selection change. Font selection is Google Fonts. 		- Default: Roboto.
 
        
--------------------------------------------------------------------------------------------------------------------------------
3. Input for Quantity of signs:

	a. Number of signs (default 10).

--------------------------------------------------------------------------------------------------------------------------------
4. Radio Input: With sign stands? (Default : no):

	a. If Yes > Quantity (input):
	- Same number as number of signs (default),
	- user input number.

	b. No > Hide any related info.

--------------------------------------------------------------------------------------------------------------------------------
5. Shipping Estimator:

	a. Country (Australia only),

	b. State (all states, default Western Australia),

	c. Postcode (default blank).



--------------------------------------------------------------------------------------------------------------------------------

PART 2 – Pricing / Figures.

--------------------------------------------------------------------------------------------------------------------------------
OVERVIEW.

Display the total cost of the order, itemised to include all inputs listed below, if any input is 0 or empty do not display in total.

I will modify the pricing in the code you deliver as required, placeholder pricing below. 
Pricing updated dynamically on input changes.

--------------------------------------------------------------------------------------------------------------------------------
SIGN PRICING:

1. Size Selection.
- 300mm x 450mm: $10.00 per sign,
- 450mm x 600m: $15.00 per sign,
- 600mm x 900mm: $20.00 per sign,
- 1200mm x 1800mm: $30.00 per sign.

2. Colour.
- White: $0,
- Black : + $0.50
- All other colours : + $1.00

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




