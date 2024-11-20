
const inputNum = document.querySelector("#num-input");
const inputOpt = document.querySelector("#opt-input");
const genBtn = document.querySelector("#gen-btn");
const copyBtn = document.querySelector("#copy-btn");

let count = 5; options = "paras"
genBtn.addEventListener("click", function(){
        getValues();
    
});

function getValues() {
    count = inputNum.value;
    options = inputOpt.value;
    // console.log(count, options);
    url = `https://baconipsum.com/api/?type=meat-and-filler&${options}=${count}&format=text`
    
}