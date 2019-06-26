<section id="sign-options">
	<h2>Choose a Coreflute sign <small>(example)</small></h2>

	<div class="input-row  input-section">

		<!-- sizeOfSign -->
		<div class="input-container">
			<label>Sign Size</label>
			<select class="sizeOfSign">
			  <option value="200mmx300mm">200mm x 300mm</option>
			  <option value="400mmx600mm" selected>400mm x 600mm </option>
			  <option value="600mmx800mm">600mm x 800mm</option>
			</select> 
			<span class="label">Height x Width</span>
		</div>
		
		<!-- signOrientation -->
		<div class="input-container">
			<label>Sign Orientation</label>
			
			<div class="radio">
			
				 <span>&nbsp;Landscape&nbsp;</span>

				 <input type="radio" name="signOrientation" value="landscape" checked >


				<span>&nbsp;Portrait</span>

				<input type="radio" name="signOrientation" value="portrait">
			
			</div>
		</div>

		<!-- signPadding -->
		<div class="input-container">
			<label for="padding">Sign Padding</label>
			<input type="range" class="signPadding" name="signPadding" min="10" max="90" value="50"> 
			<span class="signPaddingLabel"></span>
		</div>

		<!-- signColour -->
		<div class="input-container">
			<label>Sign Colour</label>
			<select class="signColour">
			  <option value="white" selected>White</option>
			  <option value="black ">Black</option>
			  <option value="red">Red</option>
			   <option value="green ">Green</option>
			  <option value="blue">Blue</option>
			</select>
		</div>

		<!-- doubleSided-->
		<div class="input-container">
			<label>Double Sided?</label>
			<input type="checkbox" name="doubleSided" value="double sided" class="doubleSided" >
			<span class="doubleSidedLabel"></span>
		</div>

	</div>
</section>

<section id="sign-demo">

	<h2>Sign Demo <small>(example)</small></h2>
	
		<div class="demo-options">
			<label>Hide Padding Guides</label>
			<input type="checkbox" name="hidePadding" value="hide padding" class="hidePadding">
		</div>
		
		<div class="input-section">
	
			<div class="demoSign">

			<div class="demoGuides">
				<div class="demoPadding">

					<div class="demo-line-1">
						<div>John's Electrical</div>
					</div>

					<div class="demo-line-2">
						<div>www.johnselectrical.com.au</div>
					</div>

					<div class="demo-line-3">
						<div>Call 0435 567 654</div>
					</div>

				</div>
			</div>
</div>
		
		</div>

		<div class="demo-options">
			<label>LINE DISTRIBUTION</label>
		</div>

		<div class="demo-options demo-options2 lineDistribution">
		
			<span>&nbsp;Space-Between&nbsp;</span>	
			<input type="radio" name="lineDistribution" value="space-between" checked>
			
			<span>&nbsp;Space-Around</span>
			<input type="radio" name="lineDistribution" value="space-around">

			<span>&nbsp;Space-Evenly</span>
			<input type="radio" name="lineDistribution" value="space-evenly">
		</div>
	
	
	
</section>

<!--<section id="sign-text">

	<h2>Add Text <small>(example)</small></h2>
	
		<div class="lineNumber accordion-item">
		<div class="accordion-title active">
			<h3>Line 1</h3>
			<div>
						<svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow"><title>cheveron down</title><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
				</div>
		</div>
		<div class="input-section accordion-content" style="display: block;">	
			<div class="input-row">

				<div class="input-container lineText">
					<label>Example Line 1 :</label>
					<input type="text" name="firstname" value="John's Electrical" class="line1">
				</div>

				<div class="input-container lineFont font">
					<label>Select Font</label>
					<select>
					  <option value="Impact" selected>Impact</option>
					  <option value="">All</option>
					  <option value="">the</option>
					   <option value="">google</option>
					  <option value="">fonts</option>
					</select>
	</div>

				<div class="input-container fullWidth">
					<label>Full Width Text?</label>
					<input type="checkbox" name="full-width" value="full-width" checked>
					<span class="label">Yes</span>
	</div>

				<div class="input-container letterHeight">
					<label class="strikethrough-demo letterLabel">Letter Height (mm)</label>
					<input type="number" name="quantity" min="1" max="300" value="">
	</div>

				<div class="input-container vinylColour">
					<label>Colour</label>
					<input type="color" name="polymetric-colors" value="#ff0000">
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
		</div>
	</div>
	
	<!--demo only hide-- <h3>Line 2</h3>
	<div class="input-section">
	
		<div class="input-row">
			<div class="input-container">
				<label>Example Line 2 :</label>
				<input type="text" name="firstname" value="www.johnselectrical.com.au" class="line2">
			</div>

			<div class="input-container font2">
				<label>Select Font</label>
				<select>
				  <option value="Calibi" selected>Calibri</option>
				  <option value="">All</option>
				  <option value="">the</option>
				   <option value="">google</option>
				  <option value="">fonts</option>
				</select>
			</div>

			<div class="input-container">
				<label>Full Width Text?</label>
				<input type="checkbox" name="full-width" value="full-width">
				<span class="label">Yes</span>
			</div>

			<div class="input-container">
				<label>Letter Height (mm)</label>
				<input type="number" name="quantity" min="1" max="300" value="30">
			</div>

			<div class="input-container">
				<label>Colour</label>
				<input type="color" name="polymetric-colors" value="#0000ff">
			</div>

			<div class="input-container">
				<label>Invert Colors?</label>
				<input type="checkbox" name="inverted" value="inverted" checked>
				<span class="label">Yes</span>
			</div>

		</div>

		<div class="input-row">

			<div class="button-container">
				<div class="warning"></div>
				<button>Add Another Line</button>
				<button>Remove This Line</button>
			</div>
		</div>

	</div>
	
	<h3>Line 3</h3>
	<div class="input-section">

		<div class="input-row">

			<div class="input-container">
				<label>Example Line 3 :</label>
				<input type="text" name="firstname" value="Call 0435 567 654" class="line3">
			</div>

			<div class="input-container font3">
				<label>Select Font</label>
				<select>
				  <option value="Roboto" selected>Roboto</option>
				  <option value="">All</option>
				  <option value="">the</option>
				   <option value="">google</option>
				  <option value="">fonts</option>
				</select>
			</div>

			<div class="input-container">
				<label>Full Width Text?</label>
				<input type="checkbox" name="full-width" value="full-width">
				<span class="label">Yes</span>
			</div>

			<div class="input-container">
				<label>Letter Height (mm)</label>
				<input type="number" name="quantity" min="1" max="300" value="100">
			</div>


			<div class="input-container">
				<label>Colour</label>
				<input type="color" name="polymetric-colors">
			</div>

			<div class="input-container">
				<label>Invert Colors?</label>
				<input type="checkbox" name="inverted" value="inverted">
				<span class="label">Yes</span>
			</div>

		</div>

		<div class="input-row">

			<div class="button-container">
				<div class="warning">WARNING - This line is outside the boundaries of the sign.</div>
				<button>Add Another Line</button>
				<button>Remove This Line</button>
			</div>
		</div>
	</div>
	demo only hide -->
<!--</section>-->

<section id="sign-text" class="fade-in">

	<h2>Add Text <small>(example)</small></h2>
	
	<button id="test">Test</button>

	<div class="lineNumber accordion-item">
		<div class="accordion-title">
			<h3>Line 1</h3>
			<div>
						<svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow"><title>cheveron down</title><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
				</div>
		</div>
		<div class="input-section accordion-content" style="display: block;">	
			<div class="input-row">

				<div class="input-container">
					<label>Example Line 1 :</label>
					<input type="text" name="lineText" value="John's Electrical" class="lineText">
				</div>

				<div class="input-container font">
					<label>Select Font</label>
					<select class="lineFont">
					  <option value="Impact" selected>Impact</option>
					  <option value="1">All</option>
					  <option value="2">the</option>
					   <option value="3">google</option>
					  <option value="4">fonts</option>
					</select>
	</div>

				<div class="input-container">
					<label>Full Width Text?</label>
					<input type="checkbox" name="fullWidth" value="full width" class="fullWidth" checked>
					<span class="fullWidthLabel"></span>
	</div>

				<div class="input-container">
					<label class="strikethrough-demo letterHeightLabel">Letter Height (mm)</label>
					<input type="number" name="letterHeight" min="1" max="300" value="" class="letterHeight">
	</div>

				<div class="input-container">
					<label>Colour</label>
					<input type="color" name="vinylColour" value="#ff0000" class="vinylColour">
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
		</div>
	</div>

</section>

<section id="order-options">
	<h2>Order Options <small>(example)</small></h2>

	<div class="input-row  input-section">

		<!-- signStands -->
		<div class="input-container signStands">
			<label>Add Sign Stands?</label>
			<span class="radio">
			 <input type="radio" name="signStands" value="no" checked><span>&nbsp;No&nbsp;</span>
			<input type="radio" name="signStands" value="yes"><span>&nbsp;Yes</span>
			</span>
		</div>

		<!-- signQuantity -->
		<div class="input-container">
			<label>Sign Quantity</label>
			<input type="number" name="signQuantity" min="1" max="300" value="10" class="signQuantity">
		</div>

		<!-- signLocation -->
		<div class="input-container">
			<label>Location</label>
			<select class="signLocation">
			  <option value="WA" selected>WA</option>
			  <option value="NSW">NSW</option>
			  <option value="NT">NT</option>
			   <option value="SA">SA</option>
			  <option value="TAS">TAS</option>
        <option value="ACT">ACT</option>
        <option value="VIC">VIC</option>
        <option value="QLD">QLD</option>
			</select>
		</div>

		<!-- localPickup -->
		<div class="input-container">
			<label>Local Pickup?</label>
			<input type="checkbox" name="localPickup" value="local pickup" class="localPickup">
			<span class="localPickupLabel"></span>
		</div>
	</div>
</section>

<section id="order-summary">

	<h2>Order Summary <small>(example)</small></h2>
	
	<div id="order-summary" class="input-row">
		<div class="summary-container input-section">
			
			<table class="text-summary">
				<tr>
					<th>Size</th>
					<th>Orientation</th>
					<th>Padding</th>
					<th>Number of Lines</th>
					<th>Color</th>
					<th>Double-Sided</th>
					<th>Quantity</th>
					<th>Stands</th>
				</tr>

				<tr>
					<td class="signSize">600x400</td>
					<td class="signOrientation">Horizontal</td>
					<td class="signPadding">25mm</td>
					<td class="signQuantity">Three</td>
					<td class="signColour">White</td>
					<td class="doubleSided">Yes</td>
					<td class="signQuantity">10</td>
					<td class="signStands">Yes</td>
				</tr>
			</table>
		</div>
			<h3>Line 0</h3>
		<div class="summary-container  input-section">
			
			<table class="text-summary">
				<tr>
					<th>Text</th>
					<th>Font</th>
					<th>Full Width</th>
					<th>Colour</th>
				</tr>

				<tr>
					<td>John's Electrical</td>
					<td>Impact</td>
					<td>Yes</td>
					<td>Red</td>
				</tr>
			</table>
		</div>
		<h3>PRODUCTION TEMPLATE</h3>
		<div class="summary-container  input-section">
			
			<table class="text-summary">
				<tr>
					<th>Text</th>
					<th>Font</th>
					<th>Full Width</th>
					<th>Letter Height</th>
					<th>Colour</th>
					<th>Inverted Colour</th>
				</tr>

				<tr>
					<td class="lineText">John's Electrical</td>
					<td class="lineFont">Impact</td>
					<td class="fullWidth">Yes</td>
					<td class="letterHeight">30mm</td>
					<td class="vinylColour">Red</td>
					<td class="invertColour">Yes</td>
				</tr>
			</table>
		</div>
		<h3>Line 2</h3>
		<div class="summary-container  input-section">
			
			<table class="text-summary">
				<tr>
					<th>Text</th>
					<th>Font</th>
					<th>Letter Height</th>
					<th>Colour</th>
					<th>Inverted Colour</th>
				</tr>

				<tr>
					<td>www.johnselectrical.com.au</td>
					<td>Impact</td>
					<td>30mm</td>
					<td>Blue</td>
					<td>Yes</td>
				</tr>
			</table>
		</div>
		<h3>Line 3</h3>
		<div class="summary-container  input-section">
			
			<table class="text-summary">
				<tr>
					<th>Text</th>
					<th>Font</th>
					
					<th>Letter Height</th>
					<th>Colour</th>
				</tr>

				<tr>
					<td>Call 0435 567 654</td>
					<td>Roboto</td>
					<td>100mm</td>
					<td>Black</td>
				</tr>
			</table>

		</div>
		<h3>Costs</h3>
		<div class="summary-container  input-section">
			
			<table class="text-summary  summary-totals">
				<tr>
					<th></th>
					<th>White Sign</th>

					<th>3 Colours</th>

					<th>Double Sided</th>
					<th>Stand</th>

					<th>Total</th>
				</tr>

				<tr>
					<td><b>Each</b></td>


					<td>$10.00</td>
					<td>$5.00</td>
					<td>$5.00</td>
					<td>$2.00</td>
					<td>$25.00</td>
				</tr>

				<tr>
					<td><b>x10</b></td>
					<td>$100.00</td>
					<td>$50.00</td>
					<td>$50.00</td>
					<td>$20.00</td>

					<td>$220.00</td>
				</tr>
			</table>

		</div>
	</div>
</section>
	
<section id="customer-details">

	<h2>Customer Details</h2>

	<div class="input-row input-section">


		<div class="input-container">
			<label for="name">Name</label>
			<input type="text" name="name" required />
		</div>

		<div class="input-container">
			<label for="email">Email</label>
			<input type="email" name="email" required />
		</div>

		<div class="input-container">
			<label for="phone">Phone</label>
			<input type="tel" name="phone" required />
		</div>

		<div class="input-container">
			<label for="formtext">Message</label>

			<textarea type="text" name="formtext"></textarea>
		</div>


	</div>

	<h2>Place Order <small>(example)</small></h2>

	<div class="input-container">

		<div class="warning warning2">WARNING - Cannot submit, line 3 exceeds sign's padding.</div>

		<input type="submit" value="Submit">
	</div>

</section>
