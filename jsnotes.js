//GET VALUE OF ALL INPUTS
//this onclick create object, hide button.
//this onclick inputs, add values of object to array.
//iterate add each array to object.


//get values of inputs
document.getElementsByTagName("input")[0].value;
document.querySelectorAll('#searchTxt')[0].value;


	
//get the closest element to the click
var edit_td = $(e.target).closest('.edit_td');


//on keyup put name / value pair in array.
// TODO update demo live
<input type="number" name="mobile" id="number" onkeyup=handleInput(this)>

  const data={ };
    function handleInput(e){
        data[e.name] = e.value;
        
        submitData();
    }
    
    function submitData(){
        console.log(data.fname); //get first name from object
        console.log(data); //return object
        
        console.log(Object.values(data));//get all values in object
        
        console.log(data[Object.keys(data)[0]]);//get object by index
    }
   
   