const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});


function updateSelectedText() {
    var dropdown = document.getElementById("hospitalDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    var selectedTextElement = document.querySelector(".selected-text");
    
    if (selectedOption !== "Please select hospital") {
      selectedTextElement.textContent = selectedOption;
    } else {
      selectedTextElement.textContent = "Please select hospital";
    }
  }
  