// selections
const subjects = document.querySelector("#subjects"),
    gotNumber = document.querySelector("#numbers"),
    displayResult = document.querySelector(".display"),
    subjectContent = displayResult.querySelector(".subject"),
    NumberContent = displayResult.querySelector(".number"),
    gradeContent = displayResult.querySelector(".grade"),
    error = document.querySelector(".error"),
    getResultBtn = document.querySelector(".get-result");

// get result eventlistener
getResultBtn.onclick = () => {
    displayResult.classList.remove("show");
    displayResult.querySelector("ul.grades").innerHTML = "";
    displayResult.querySelector("ul.marksCount").innerHTML = "";
    displayResult.querySelector("ul.subjectsName").innerHTML = "";
    var subjectField = subjects.value;
    var numberField = gotNumber.value;
    let numArr = [];
    let gradeArr = [];
    let subArr = [];


    if (numberField == "" || subjectField == "") {
        getResultBtn.classList.add("disabled");
        error.innerHTML = "<span class='error-text'>All Fields are required!</span>";
    } else {
        displayResult.classList.add("show");
        // set subject in array for showing 
        subjectField.split(", ").forEach(sub => {
            subArr.push(sub);
            let tags = `<li>${sub}</li>`;
            displayResult.querySelector("ul.subjectsName").insertAdjacentHTML("beforeend", tags);
        })
        //  set marks in arry for showing
        numberField.split(", ").forEach(mark => {
            numArr.push(mark);
            let markTag = `<li>${mark}</li>`;
            displayResult.querySelector("ul.marksCount").insertAdjacentHTML("beforeend", markTag);
        })
        // calculations for marks grade 
        for (var i = 0; i < numArr.length; i++) {
            let element = numArr[i];
            if (element < 33) {
                gradeArr.push("F");
            } else if (element >= 33 && element < 50) {
                gradeArr.push("D");

            } else if (element >= 50 && element < 60) {
                gradeArr.push("B");

            } else if (element >= 60 && element < 70) {
                gradeArr.push("A-");

            } else if (element >= 70 && element < 80) {
                gradeArr.push("A");

            } else if (element >= 80 && element <= 100) {
                gradeArr.push("A+");
            }

        }
        // show grade in ui 
        gradeArr.forEach(grade => {
            let gradeTag = `<li>${grade}</li>`;
            displayResult.querySelector("ul.grades").insertAdjacentHTML("beforeend", gradeTag);
        })

        //    for match similar value between two input field       
        if (numArr.length != subArr.length) {
            displayResult.classList.remove("show");
            error.innerHTML = "<span class='error-text'>Type equal value between two fields.</span>";
        } else {
            displayResult.classList.add("show");
            error.innerHTML = "";
        }

    }
};

// to get enabled in get grade button 


function bluring() {
    getResultBtn.classList.remove("disabled");
    
}

subjects.addEventListener("blur", bluring);
gotNumber.addEventListener("blur", bluring);