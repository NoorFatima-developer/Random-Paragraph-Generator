
const inputNum = document.querySelector("#num-input");
const inputOpt = document.querySelector("#opt-input");
const genBtn = document.querySelector("#gen-btn");
const genContent = document.querySelector(".gen-content");
const copyBtn = document.querySelector("#copy-btn");


let count = 5; options = "paras"; tempCount = 0;
genBtn.addEventListener("click", function(){
        getValues();
        ValidateValue();
    
});

function getValues() {
    count = inputNum.value;
    options = inputOpt.value;
    // console.log(count, options);
    url = `https://baconipsum.com/api/?type=meat-and-filler&${options}=${count}&start-with-lorem=1`
    fetchCounter(url)
}

async function fetchCounter(Url) {
    let response = await fetch(Url)
    if(response.status === 200){
        let data = await response.json();
        displayData(data);
        console.log(data);
    }else {
        alert("An error occurred while fetching data")
    }
}

function displayData(data) {
    let texts = "";
    texts = data.join("<br><br>")
    genContent.innerHTML = texts;
}

function ValidateValue(){
    tempCount = "";
    if(count > 100){
        invalidInput()
        count = 100;
        inputNum.value = "100";
    }else if(count < 1 || isNaN(count)){
        invalidInput()
        count = 5;
        inputNum.value = "5";
    }
}

function invalidInput() {
    inputNum.style.borderColor = "red";

    setTimeout(() => {
        inputNum.style.borderColor = "#d3deb4";
    }, 5000);
}

// Copy to clipboard function

copyBtn.addEventListener("click",()=>{
    let copytext = genContent.textContent;
    navigator.clipboard.writeText(copytext);
})


// NOTE:
// async wait promise return krta hai and jb async use hota hai tu hum await ka use krty hain or jahan hum await lagaty hain oska
// mtlb ye hota hai k jahan m await lgya hai tm wahan pr stop na kro kisi network error ya kisi b waja sy balky data fetch kro jahan await laga or next line pr jao yahan pr e stop na kro...
