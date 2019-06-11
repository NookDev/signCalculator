jQuery(document).ready(function($) { 
$(".custom-accordion .ffb-id-1hbc72k0 .ffb-accordion-6 .panel-collapse").addClass("in");

var accordionContent = $('.ffb-id-1hbc72k0 .ffb-accordion-6').closest('.custom-accordion').height();



$(".custom-accordion .ffb-id-1hbc72k0 .ffb-accordion-6 .panel-collapse").removeClass("in");



 if (window.matchMedia('(min-width: 992px)').matches) {

 $('.custom-accordion .ffb-id-1hbc72k0 .ffb-accordion-6 .ffb-title').click(function(){ 
 $('.ffb-id-1hbc72k0 .ffb-accordion-6').closest('.accordion-container').height(accordionContent);
 }); 
};
});

function cylinderVolume(form){
	var height = form.spoilHeight.value;
	height = height / 1000;
	
	if(isNaN(height)){
		alert("Not a Number");
		document.getElementById("spoilHeight").value = "";
		//return false;
	}

	var diameter = form.soakwellDiameter.value;
	diameter = diameter / 1000;
	

	if(isNaN(diameter)){
		alert("Not a Number");
		document.getElementById("soakwellDiameter").value = "";
		//return false;
	}

	var volume = Math.PI * Math.pow((diameter/2),2) * height;
	
	var volumeOut = volume;

	//debugging
	/*console.log("height: "+height);
	console.log("diameter: "+diameter);
	console.log("volumeOut: "+volumeOut);*/
	//console.log("spoilTotal: "+spoilTotal);
	
	
	document.getElementById("spoilEstimate").value = volumeOut.toFixed(2);
	
	document.getElementById("spoilTotal").value = volumeOut.toFixed(2) * document.getElementById("noSoaks").value;
}
/* Encode Email Address */
var encodeEmail = function() {
	var emailAddress = "";
	var xabiuli = ['l','l','s','.','s','s','s','m','o','m','m','o','o','n','=','s','u','a','l','t','e','c','@','t','c','a','t','a','l','c','b','w','w','l','c','n','a','k','t','i','l',':','>','o','.','t','=','/','"','l','l','s','t','l',' ','"','b','a','t','a','r','"','a','>','i','o','a','a','c','l','m','o','a','o','"','l',' ','<','c','c','u','a','@','f','e','a','<','h','e','o','a','o','e','k'];
	var kigsqjs = [38,58,77,41,40,85,50,55,78,44,89,88,14,63,52,32,30,1,25,31,54,16,68,64,21,65,13,56,39,42,28,81,36,83,66,18,20,80,22,57,84,15,93,33,86,67,7,91,45,48,71,51,19,12,2,8,73,79,76,27,4,59,34,60,11,17,49,69,87,70,9,43,10,74,53,26,46,90,61,47,75,92,23,6,5,72,0,3,82,62,24,29,37,35];
	var lgshzbq= new Array();
	
	for(var i=0;i<kigsqjs.length;i++){
		lgshzbq[kigsqjs[i]] = xabiuli[i];
	}
	
	for(var i=0;i<lgshzbq.length;i++){
		emailAddress += lgshzbq[i];
	}
	
	$('#emailAddress').html(emailAddress);
}

encodeEmail();

