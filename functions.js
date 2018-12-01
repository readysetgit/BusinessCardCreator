

// Toggle the Gender Radio Buttons
function toggleGender(){
    let checkbox = document.getElementById('genderCheckbox');
    let radios = document.getElementsByName("gender");
    let radioLabels = document.getElementsByName("genderLabel")
 
  if (checkbox.checked == true) {
      //Loop to disable all gender radio buttons and change labels to grey color
    for (let i=0, iLen=radios.length; i<iLen; i++) {
        radios[i].disabled = true; 
        radioLabels[i].style.color="grey";
    } 
  } else {
      //Loop to enable all gender radio buttons and change labels back to black
    for (let i=0, iLen=radios.length; i<iLen; i++) {
        radios[i].disabled = false;
        radioLabels[i].style.color="black";

    } 
  }
    
}



//------------------Validating individual inputs onblur------------------//
function validateName(element){
    let Alert =  document.getElementById("nameAlert") //The validation alert for the current input

    //If the input  is invalid, the small alert under it changes color to red
    if(element.value.length <1 ){   //If length < 1, it means the input is empty
        Alert.style.display = "block" 
        Alert.style.color = "red";
    }
    else
    //If the input is valid, the alert disappears
        Alert.style.display = "none"
}

function validateAddress(element){
    let Alert =  document.getElementById("addressAlert")

    if(element.value.length <1 ){
        Alert.style.display = "block"
        Alert.style.color = "red";
    }
    else
        Alert.style.display = "none"
}

function validateCompany(element){
    let Alert =  document.getElementById("companyAlert")

    if(element.value.length <1 ){
        Alert.style.display = "block"
        Alert.style.color = "red";
    }
    else
        Alert.style.display = "none"
}

function validateNumber(element){
    let Alert =  document.getElementById("numberAlert")
    let regex =  /^\d*$/; //Regular expression that only allows numbers
    let isValid = regex.test(element.value); //We test if the input is all numbers
    
    //Input passes if it's not empty and numbers only
    if(!isValid || element.value.length < 1){
        Alert.style.display = "block"
        Alert.style.color = "red";
    }
    else
        Alert.style.display = "none"
}
//-------------------------------------------------------------------//

//Make the Business card
function makeCard(){
    let flag=0
    let alertlist= document.getElementsByName("alerts")
    
    //If all inputs are valid, flag will be 1 less than alertlist.length
    for (let i=0, iLen=alertlist.length; i<iLen; i++) {
        if (alertlist[i].style.display == "none"){ //Basically, for any invalid input, this condition won't be satisfied and flag's value will be caught in the following code

            flag=i;
        }
    } 
    // Alerts the user on empty fields if flag is not the required length
    if (flag != alertlist.length - 1){
        alert("Please don't leave any input empty or invalid :P")
    } else {
    
    document.getElementById("CARD").style.filter="none" //Removes the grayscale filter from the card

    let submission = document.forms["cardForm"] //Gets all user input data from the form

    // Taking all the form data nad putting it into the corresponding card elements
    let name = submission["userName"].value;
    document.getElementById("cardName").innerHTML=name;

    let number = submission["phoneNumber"].value;
    document.getElementById("cardNumber").innerHTML=number;

    let address = submission["address"].value;
    document.getElementById("cardAddress").innerHTML=address;

    let company = submission["companyName"].value;
    document.getElementById("cardCompany").innerHTML=company;

    let gender = submission["gender"].value;
    checkbox = submission["genderCheckbox"]
    
    let food = submission["food"].value;
    document.getElementById("cardFood").innerHTML='Craves'+' ' +food;

    // Ignore gender data if user does not wish to show gender
    if (checkbox.checked == true){
        document.getElementById("cardGender").style.display="none"
    }
    else{
        document.getElementById("cardGender").innerHTML=gender;
    }
 }

    
}

