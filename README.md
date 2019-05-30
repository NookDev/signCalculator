# signCalculator
Form that generates a preview of the sign and provides costings.

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

1. Size Selection:
This will create a ‘canvas’ for the sign, the canvas must have padding and the text added must not exceed the width of the canvas minus padding. 
If the text overflows the padding a warning must be given below the relevant text input that the text exceeds the available canvas width.

	1a. Dimensions.
	- 200mm x 300mm,
	- 400mm x 600mm (default),
	- 600mm x 800mm.

	1b. Orientation.
	- Horizontal (default),
	- Vertical.

	1c. Padding (width and height).
	- default / minimum 25mm,
	- customizable with slider or input.

--------------------------------------------------------------------------------------------------------------------------------
2. Text:
The user inputs the text for each line of the sign. By default there is one line with a button to add additional lines. 
For each line the user can edit the text, change the line height, choose the height of the lettering in mm and choose the color.
If text exceeds width or height of the canvas - padding a warning is given and form cannot submit. 
If extra lines will not fit at any time, display text below the line in red, informing user ‘this line exceeds the available space and will not be visible’. For example if a lines size is increased pushing the line below off the canvas.

	FOR EACH LINE:

	2a. Enter Text – Text Input, one line only, no wrap, default ‘Enter your text here’.

	2b. Letter Height – Number Input (mm) minimum 20mm, default 30mm.

	2c. Line Height – default 1.5 (minimum), increase / decrease input.

	2d. Color – dropdown list (order as per chart).
	The color of the text will be updated in the demonstration upon selection of a color.
	Include all the colors in the chart below as dropdown list with color name it’s  actual color eg. Deep Red. Open to discussing alternatives is you think there is a better way.
	Default: black.
 
--------------------------------------------------------------------------------------------------------------------------------
3. Font, dropdown menu (alphabetical order):
Name of font to be in font eg. Book Antiqua. Text in demostration updated on selection change. Font selection is Google Fonts. Default: Roboto.

	3a. Dropdown with all Google Fonts available.

--------------------------------------------------------------------------------------------------------------------------------
4. Quantity:

	4a. Number of signs (default 10).

--------------------------------------------------------------------------------------------------------------------------------
5. With stands? (Default no):

	5a. Yes > Quantity.
	- Same number as number of signs (default),
	- user input number.

	5b. No.

--------------------------------------------------------------------------------------------------------------------------------
6. Shipping Estimator:

	6a. Country (Australia only),

	6b. State (all states, default Western Australia),

	6c. postcode (default blank).



--------------------------------------------------------------------------------------------------------------------------------

PART 2 – Pricing / Figures.

--------------------------------------------------------------------------------------------------------------------------------
OVERVIEW.

Display total cost, itemised to include all inputs listed below, if any input is 0 or empty do not display in total.

I will modify the pricing in the code you deliver as required, placeholder pricing below. 
Pricing updated dynamically on input changes.

--------------------------------------------------------------------------------------------------------------------------------
SIGN PRICING:

1. Size Selection.
- 300mm x 450mm: $10.00 per sign,
- 450mm x 600m: $15.00 per sign,
- 600mm x 900mm: $20.00 per sign,
- 1200mm x 1800mm: $30.00 per sign.

2. Stands.
- 1 stand: $2.50,
- 2-9 stands: $2.50 ea,
- 10 - 19 stands: $2.00 ea,
- 20 - 50 stands:  $1.80 ea,
- 50+ stands: $1.50 ea.


2. Number of colors (max 3).
- 1 color:  $0.00,
- 2 colors: +$2.50 per sign,
- 3 colors: +$5.00 per sign.

3. Number of lines.
- 1-3:  $0.00,
- 4-5: +$2.50 per sign.
- 6+: +$5.00 per sign.

4. Quantity.
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

	Size of sign:

	For each line:
	- Text,
	- Size,
	- Color,
	- Font.

	Quantity of Signs:

	Number of stands: (hide if 0)


4. Summary of Totals:

	- Cost per sign,
	- Total cost of signs.

	- Cost per stand (hide if 0),
	- Total cost of stands.

	- Sub total: signs + stands.

	- Shipping Total.

	- Grand Total: sub total + shipping total.

	- Total includes GST of (10% of grand total).




