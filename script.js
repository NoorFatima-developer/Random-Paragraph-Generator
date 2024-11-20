const inputNum = document.querySelector("#num-input");
const inputOpt = document.querySelector("#opt-input");
const genBtn = document.querySelector("#gen-btn");
const genContent = document.querySelector(".gen-content");
const copyBtn = document.querySelector("#copy-btn");

let count = 5; options = "paras"; 
genBtn.addEventListener("click", function(){
    count = inputNum.value.trim()
    if (ValidateValue()){
        getValues();
    }
});

function getValues() {
    count = inputNum.value;
    options = inputOpt.value;
  
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
    if(count > 100){
        invalidInput()
        count = 100;
        inputNum.value = "";
        genContent.innerHTML = ""
        return false;
    }else if(count < 1 || isNaN(count)){
        invalidInput()
        count = 5;
        inputNum.value = "";
        genContent.innerHTML = ""
        return false;
    }
    return true;
}

function invalidInput() {
    inputNum.style.borderColor = "red";
    inputNum.placeholder = "Invalid input!"   

    setTimeout(() => {
        inputNum.style.borderColor = "#d3deb4";
    }, 1000);
}

// Copy to clipboard function

copyBtn.addEventListener("click",()=>{
    let copytext = genContent.textContent;
    navigator.clipboard.writeText(copytext);
})

// NOTE:
// async wait promise return krta hai and jb async use hota hai tu hum await ka use krty hain or jahan hum await lagaty hain oska
// mtlb ye hota hai k jahan m await lgya hai tm wahan pr stop na kro kisi network error ya kisi b waja sy balky data fetch kro jahan await laga or next line pr jao yahan pr e stop na kro...


🌈 Day 35: JavaScript Practice - Random Paragraph Generator App ✨

Today, I took another step in mastering JavaScript by building a Random Paragraph Generator App! 🚀 This project showcases how seamlessly HTML, CSS, and JavaScript can work together to create dynamic and interactive user experiences. 

### 🎯 Key Features of My App:
- 🔢 Customizable Input: Choose the number of paragraphs or sentences to generate.
- ⚡ Responsive Design: Optimized for all devices, ensuring a seamless experience.
- 🖱️ Copy Functionality: Easily copy generated content with a single click.
- 🌟 Interactive Animations: Enhanced user engagement through subtle animations.

This app leverages the Bacon Ipsum API to fetch random text dynamically. It's a great exercise in integrating APIs, improving UI/UX, and working with form validations.

🔗 Live Demo: [Random Paragraph Generator](https://lnkd.in/dynamic-link)

💻 GitHub Repository: [Explore the Code](https://lnkd.in/dynamic-code-link)

---

🎉 A huge shoutout to everyone who inspires and motivates me on this learning journey! Special thanks to Saifullah Khan for his guidance and encouragement. 🙌

What do you think of this app? Your feedback and suggestions are always welcome! 💬 

#JavaScript 💻 #HTML #CSS #WebDevelopment #FrontendDevelopment #CodingJourney #SelfTaughtDeveloper #ProgrammingPractice