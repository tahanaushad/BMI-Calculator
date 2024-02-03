

function checkFunction() {
    const ageEl = document.getElementById("ageInput").value;
    const heightEl = document.getElementById("heightInput").value;
    const weightEl = document.getElementById("wieghtInput").value;
    const hieghtSquare = heightEl ** 2;

    let result = parseInt(weightEl) / parseInt(hieghtSquare);

    let bmi;

    if (result < 18.5) {
        bmi = (result +  " Under Weight")
    }
    else if (result < 24.9) {
        bmi = (result + " Normal Weight")
    }
    else if (result < 29.9) {
        bmi = (result + " Over Weight")
    }
    else if (result < 34.9) {
        bmi = (result + " Obesity Class l")
    }
    else if (result < 39.9) {
        bmi = (result + " Obesity Class ll")
    }
    else  {
    bmi = (result + " Obesity Class lll")
    }



    const displayBmi = document.getElementById("bmiResult");
    displayBmi.innerText = bmi;
    
}



