
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
    url = `https://baconipsum.com/api/?type=meat-and-filler&${options}=${count}&start-with-lorem=1`
    fetchCounter(url)
}

async function fetchCounter(Url) {
    let response = await fetch(Url)
    if(response.status === 200){
        let data = await response.json();
        console.log(data);
        
    }

}

// NOTE:

// async wait promise return krta hai and jb async use hota hai tu hum await ka use krty hain or jahan hum await lagaty hain oska
// mtlb ye hota hai k jahan m await lgya hai tm wahan pr stop na kro kisi network error ya kisi b waja sy balky data fetch kro jahan await laga or next line pr jao yahan pr e stop na kro...
