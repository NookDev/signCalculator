<section id="sign-options">
	<h2>Choose a Coreflute sign <small>(example)</small></h2>

	<div class="input-row">

		<div class="input-container">
			<label>Sign Size</label>
			<select>
			  <option value="200mmx300mm">200mm x 300mm</option>
			  <option value="400mmx600mm" selected>400mm x 600mm </option>
			  <option value="600mmx800mm">600mm x 800mm</option>
			</select> Height x Width
		</div>

		<div class="input-container">
			<label>Sign Orientation</label>
			<span class="radio">
			 <input type="radio" name="orientation" value="vertical" checked >           
			 <span>&nbsp;Landscape&nbsp;</span>
			<input type="radio" name="orientation" value="horizontal">
			<span>&nbsp;Portrait</span>
			</span>
		</div>

		<div class="input-container">
			<label for="padding">Sign Padding</label>
			<input type="range" name="padding" min="25" max="2500"> 25mm
		</div>

		<div class="input-container">
			<label>Sign Colour</label>
			<select>
			  <option value="white" selected>White</option>
			  <option value="black ">Black</option>
			  <option value="red">Red</option>
			   <option value="green ">Green</option>
			  <option value="blue">Blue</option>
			</select>
		</div>

		<div class="input-container">
			<label>Double Sided?</label>
			<input type="checkbox" name="double-sided" value="double-sided" checked>Yes
		</div>

	</div>
</section>

<section id="sign-demo">
	<h2>Sign Demo <small>(example)</small></h2>
	<div class="sign-demo">

		<div class="demo-padding">
			<div class="sign-padding">

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
	<div>
	
	<br>

	<label>Hide Padding Guides</label>
	<input type="checkbox" name="hide-padding" value="hide-padding">
	
	<br>
	<br>
	
	<label>Distribution</label>

	<input type="radio" name="distribution" value="space-between" checked><span>&nbsp;Space-Between&nbsp;</span>
	<input type="radio" name="distribution" value="space-around"><span>&nbsp;Space-Around</span>

	<input type="radio" name="distribution" value="space-evenly"><span>&nbsp;Space-Evenly</span>

	</div>
</section>

<section id="sign-text">

	<h2>Add Lines of Text <small>(example)</small></h2>
	
	<div class="input-section">
	
		<h3>Line 1</h3>

		<div class="input-row">

			<div class="input-container">
				<label>Example Line 1 :</label>
				<input type="text" name="firstname" value="John's Electrical" class="line1">
</div>

			<div class="input-container font">
				<label>Select Font</label>
				<select>
				  <option value="Impact" selected>Impact</option>
				  <option value="">All</option>
				  <option value="">the</option>
				   <option value="">google</option>
				  <option value="">fonts</option>
				</select>
</div>

			<div class="input-container">
				<label>Full Width Text?</label>
				<input type="checkbox" name="full-width" value="full-width">Yes
</div>

			<div class="input-container">
				<label>Letter Height (mm)</label>
				<input type="number" name="quantity" min="1" max="300" value="30">
</div>

			<div class="input-container">
				<label>Colour</label>
				<input type="color" name="polymetric-colors" value="#ff0000">
</div>

			<div class="input-container">
				<label>Invert Colors?</label>
				<input type="checkbox" name="inverted" value="inverted">Yes
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
	
	<div class="input-section">
	
		<h3>Line 2</h3>
	
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
				<input type="checkbox" name="full-width" value="full-width" checked>Yes
			</div>

			<div class="input-container">
				<label class="strikethrough-demo">Letter Height (mm)</label>
				<input type="number" name="quantity" min="1" max="300" value="">
			</div>

			<div class="input-container">
				<label>Colour</label>
				<input type="color" name="polymetric-colors" value="#0000ff">
			</div>

			<div class="input-container">
				<label>Invert Colors?</label>
				<input type="checkbox" name="inverted" value="inverted" checked>Yes
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
	
	<div class="input-section">
	
		<h3>Line 3</h3>

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
				<input type="checkbox" name="full-width" value="full-width">Yes
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
				<input type="checkbox" name="inverted" value="inverted">Yes
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
	
</section>

<section id="order-options">
	<h2>Order Options <small>(example)</small></h2>

	<div class="input-row">

		<div class="input-container">
			<label>Add Sign Stands?</label>
			<span class="radio">
			 <input type="radio" name="orientation" value="vertical" checked><span>&nbsp;Yes&nbsp;</span>
			<input type="radio" name="orientation" value="horizontal"><span>&nbsp;No</span>
			</span>
		</div>

		<div class="input-container">
			<label>Sign Quantity</label>
			<input type="number" name="quantity" min="1" max="300" value="10">
		</div>

		<div class="input-container">
			<label>Location</label>
			<select>
			  <option value="WA" selected>WA</option>
			  <option value="">NSW</option>
			  <option value="">NT</option>
			   <option value="">SA</option>
			  <option value="">TAS</option>
        <option value="">ACT</option>
        <option value="">VIC</option>
        <option value="">QLD</option>
			</select>
		</div>

		<div class="input-container">
			<label>Local Pickup?</label>
			<input type="checkbox" name="local-pickup" value="local-pickup">Yes
		</div>
	</div>
</section>

<section id="order-summary">
	<h2>Order Summary <small>(example)</small></h2>
	<div id="order-summary" class="input-row">
		<div class="summary-container">
			<h3>Sign Details</h3>
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
					<td>600x400</td>
					<td>Horizontal</td>
					<td>25mm</td>
					<td>Three</td>
					<td>White</td>
					<td>Yes</td>
					<td>10</td>
					<td>Yes</td>
				</tr>
			</table>
			<div></div>
		</div>
		<div class="summary-container">
			<h3>Line 1</h3>
			<table class="text-summary">
				<tr>
					<th>Text</th>
					<th>Font</th>
					<th>Letter Height</th>
					<th>Colour</th>
				</tr>

				<tr>
					<td>John's Electrical</td>
					<td>Impact</td>
					<td>30mm</td>
					<td>Red</td>
				</tr>
			</table>
		</div>

		<div class="summary-container">
			<h3>Line 2</h3>
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
					<td>100mm</td>
					<td>Blue</td>
					<td>Yes</td>
				</tr>
			</table>
		</div>

		<div class="summary-container">
			<h3>Line 3</h3>
			<table class="text-summary">
				<tr>
					<th>Text</th>
					<th>Font</th>
					<th>Full Width</th>
					<th>Letter Height</th>
					<th>Colour</th>
				</tr>

				<tr>
					<td>Call 0435 567 654</td>
					<td>Roboto</td>
					<td>Yes</td>
					<td>100mm</td>
					<td>Black</td>
				</tr>
			</table>

		</div>

		<div class="summary-container">
			<h3>Costs</h3>
			<table class="text-summary">
				<tr>
					<th></th>
					<th>White Signs</th>

					<th>3 Colours</th>

					<th>Double Sided</th>
					<th>Stands</th>

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

	<div class="input-row">


		<div class="input-container">
			<label for="name">Name:</label>
			<input type="text" name="name" required />
		</div>

		<div class="input-container">
			<label for="email">Email:</label>
			<input type="email" name="email" required />
		</div>

		<div class="input-container">
			<label for="phone">Phone:</label>
			<input type="tel" name="phone" required />
		</div>

		<div class="input-container">
			<label for="formtext">Message:</label>

			<textarea type="text" name="formtext"></textarea>
		</div>


	</div>

	<h2>Place Order <small>(example)</small></h2>

	<div class="input-container">

		<div class="warning warning2">WARNING - Cannot submit, line 3 exceeds sign's padding.</div>

		<input type="submit" value="Submit">
	</div>

</section>
