//NOT IN USE

$('.calc_form').keypress(function (e) {                                       
       if (e.which == 13) {
            e.preventDefault();
            //do something   
       }
});

var catchment, volume, soakwell, vol100, vol75, vol50, totalCost, cost100, cost75, cost50, numberOfTanks, wholeT100, wholeT75, wholeT50, disc100, disc75, disc50, tcost100, tcost75, tcost50, saved100, saved75, saved50;

var councilFactors = [  .0125,  //Default
                        .0125,  //Armdale
                        .0309,  //Cambridge
                        .0133,  //Cockburn
                        .0309,  //Gosnells
                        .0122   //Swan City
                     ];

var tankVolumes = [ 140, //140 litre
                    130  //130 litre
                  ];
    
var tankPrices = [  59.95, //140 litre
                    49.95, //130 litre
                 ];

//Round 'r' to 's' decimal places
var rounded = function(r, s) {
  var t = parseFloat(r.toFixed(s));
  return t;
}

//Calculate the Total Volume Required
var calcVolume = function() {
  
  catchment = $('#catchment').val();
  volume = rounded(catchment * councilFactors[$('#council').val()-1], 3);
  //Total Volume Required in cubic meters
  $(".totalVolumeM3").text(volume);
  //Total Volume Required in litres
  $(".totalVolumeL").text(volume * 1000);
  
}

//Calculate the Number of Tanks Required
var calcTanks = function() {
  
  soakwell = $('.soakwell').val();
  vol100 = Math.ceil(rounded(volume / (tankVolumes[soakwell-1] / 1000)), 2);
  vol75 = Math.ceil(rounded(vol100 * .75, 2));
  vol50 = Math.ceil(rounded(vol100 * .5, 2));
  $(".vol100").text(vol100);
  $(".vol75").text(vol75);
  $(".vol50").text(vol50);
}

//Calculate the Total Costs before discount
var calcCosts = function() {

  cost100 = rounded(vol100 * tankPrices[soakwell-1], 2);
  cost75 = rounded(vol75 * tankPrices[soakwell-1], 2);
  cost50 = rounded(vol50 * tankPrices[soakwell-1], 2);
  $("#cost100").text("$" + cost100);
  $("#cost75").text("$" + cost75);
  $("#cost50").text("$" + cost50);
  
}

//Calculate the Discount
var calcDiscount = function() {
  
  //round number of tanks to whole number
  wholeT100 = Math.ceil(vol100);
  wholeT75 = Math.ceil(vol75);
  wholeT50 = Math.ceil(vol50);

  //Calculate the discount percent for 100% volume
  if (wholeT100 >= 10) {
    if (wholeT100 >=20) {
      disc100 = 10;
    } else {
      disc100 = 5;
    }
  } else {
    disc100 = 0;
  }
  $("#disc100").text(disc100 + "%");

  //Calculate the discount percent for 75% volume
  if (wholeT75 >= 10) {
    if (wholeT75 >=20) {
      disc75 = 10;
    } else {
      disc75 = 5;
    }
  } else {
    disc75 = 0;
  }
  $("#disc75").text(disc75 + "%");

  //Calculate the discount percent for 50% volume
  if (wholeT50 >= 10) {
    if (wholeT50 >=20) {
      disc50 = 10;
    } else {
      disc50 = 5;
    }
  } else {
    disc50 = 0;
  }
  $("#disc50").text(disc50 + "%");
  
}

//Calculate the Final Costs and Amounts Saved
var calcFinalCost = function() {
  
  //Calculate the final costs
  fcost100 = rounded(cost100 * (100 - disc100) / 100, 2);
  fcost75 = rounded(cost75 * (100 - disc75) / 100, 2);
  fcost50 = rounded(cost50 * (100 - disc50) / 100, 2);
  $("#fcost100").text("$" + fcost100);
  $("#fcost75").text("$" + fcost75);
  $("#fcost50").text("$" + fcost50);
  
  //Calculate the amounts saved
  saved100 = rounded(cost100 - fcost100, 2);
  saved75 = rounded(cost75 - fcost75, 2);
  saved50 = rounded(cost50 - fcost50, 2);
  $("#saved100").text("$" + saved100);
  $("#saved75").text("$" + saved75);
  $("#saved50").text("$" + saved50);
  
}

var calculateAll = function() {
  calcVolume();
  calcTanks();
  calcCosts();
  calcDiscount()
  calcFinalCost();
}

//When the page has loaded...
$(document).ready(function() {
  
  calculateAll();
  
  //When the Catchment Area is changed...
  $('#catchment').change(function() {
    calculateAll();
  });
  
  //When the Local Council is changed...
  $('#council').change(function() {
    calculateAll();
  });
  
  //When the Soakwell size is changed...
  $('.soakwell').change(function() {
    calculateAll();
  });
  
});

var dayName=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var monName=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
var now=new Date 
document.write(dayName[now.getDay()]+", "+monName[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+".");


//console.log('onloadcallbackfunction');

//GLOBAL
var captcha_instance;

	var onloadCallback = function () {

		//debugging
		//var counter = 0;
		//console.log('invoked' + counter++ );

		var captcha = document.getElementById('captcha');

		// Renders the HTML element with id 'captcha1' as a reCAPTCHA widget.	
		// The id of the reCAPTCHA widget is assigned to 'captcha1_instance'.
		captcha_instance = grecaptcha.render(captcha, {

			//www.allaboutsoakwells.com.au
			'sitekey': '6LeRfpsUAAAAAKp3y6rqsmLNDeGLANgq8-7Jy2-D',

			//aas.development		
			//'sitekey': '6LdefZsUAAAAAF7T4kdgQaWeiOotsCmRAqQObu2M',
			//'theme': 'dark',
			'size': 'compact'//,
			//'error-callback' : grecaptachaError()
		});

	};

	//debugging
	function grecaptachaError(){
		alert ('Our apologies, something is wrong. Please call 0420 903 950 and we will take your order.');
	};