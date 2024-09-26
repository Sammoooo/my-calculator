const fn=prompt("Please Enter Your First Name")
const ln=prompt("Please Enter Your Last Name")

const shi="Warning:"
alert(shi + fn +" " + ln  + "!" + " Mind the way you use my calculator");

 function getV(value) {  
        const display = document.getElementById('clearB');  
        display.value += value; // Append the clicked button value to the display  
    }  

    function clearAll() {  
        const display = document.getElementById('clearB');  
        display.value = ''; // Clear the display  
    }  
    
    function deleteLast() {  
        const display = document.getElementById('clearB');  
        display.value = display.value.slice(0, -1); // Remove the last character  
    }  

    function calculate() {  
        const display = document.getElementById('clearB');  
        try {  
            display.value = eval(display.value); // Evaluate the expression in the display  
        } catch (error) {  
            display.value = 'Error'; // Display error message on invalid expression  
        }  
    }