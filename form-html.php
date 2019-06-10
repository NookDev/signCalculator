<section>
	<h2>Sign Options</h2>

	<div class="input-row">
	
		<div class="input-container">
			<label>Sign Size</label>
			<select>
			  <option value="200mmx300mm">200mm x 300mm</option>
			  <option value="400mmx600mm" selected>400mm x 600mm </option>
			  <option value="600mmx800mm">600mm x 800mm</option>
			</select>
		</div>
		
		<div class="input-container">
			<label>Sign Orientation</label>
			<span class="radio">
			 <input type="radio" name="orientation" value="vertical" checked >           <span>&nbspLandscape &nbsp</span>
			<input type="radio" name="orientation" value="horizontal" >
        <span>&nbspPortrait</span>
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
		
	</div>
</section>

<section>
	<h2>Sign Lines</h2>

	<div class="input-row">
		<div class="input-container">
			<label>Line 1 :</label>
			<input type="text" name="firstname" value="John's Electrical" class="line1">
		</div>
    
    <div class="input-container font">
			<label>Font</label>
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

    
		<button>Add Another Line</button>	<button>Remove This Line</button>
  
	</div>
  
  
  
  
  <div class="input-row">
		<div class="input-container">
			<label>Line 2 :</label>
			<input type="text" name="firstname" value="www.johnselectrical.com.au" class="line2">
		</div>
    
    <div class="input-container font2">
			<label>Font</label>
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
    
   
    
		<button>Add Another Line</button>	<button>Remove This Line</button>
  
	</div>
  
  
   <div class="input-row">
		<div class="input-container">
			<label>Line 3 :</label>
			<input type="text" name="firstname" value="Call 0435 567 654" class="line3">
		</div>
    
    <div class="input-container font3">
			<label>Font</label>
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
    
		<button>Add Another Line</button>	<button>Remove This Line</button>
      <div class="warning">WARNING - This line is outside the boundaries of the sign.</div>
  
	</div>
  </section>

<section>
  
	<h2>Sign Demo</h2>
  
    <div class="sign-demo">

         <div class="demo-padding">
            <div class="sign-padding"> 
              
                <div class="demo-line-1">
                    <div>John's Electrical</div>
                </div>  

                <div class="demo-line-2">
                    <div>www.johnselectrical.com.au</div>                                 </div>

                <div class="demo-line-3">
                   <div>Call 0435 567 654</div>      
                </div>   
              
            </div> 
         </div>  
    </div>
  <div>
    <br>

    <label>Hide Padding</label>
       <input type="checkbox" name="hide-padding" value="hide-padding">
    <br>
    <br>
			<label>Distribution</label>
		
			 <input type="radio" name="distribution" value="space-between" checked><span>&nbspSpace-Between &nbsp</span>
			<input type="radio" name="distribution" value="space-around"><span>&nbspSpace-Around</span>
		
  </div>
</section>



  <section>
	<h2>Order Options</h2>

 	<div class="input-row">
	
		<div class="input-container">
			<label>Sign Stands</label>
			<span class="radio">
			 <input type="radio" name="orientation" value="vertical" checked><span>&nbspYes &nbsp</span>
			<input type="radio" name="orientation" value="horizontal"><span>&nbspNo</span>
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
		</div>
		
	
</section>