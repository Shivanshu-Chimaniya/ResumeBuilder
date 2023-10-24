function addDiv(btn){
    let parent = btn.parentElement.querySelector(".container");
    let prototype = parent.firstElementChild;
    parent.appendChild(prototype.cloneNode(true));
}



function generateCV(){
    console.log("hii");
    // get values
    let mainForm = document.querySelector('.sectionHolder');
    let firstName = mainForm.querySelector('#firstName');
        lastName = mainForm.querySelector('#lastName');

    // process

    // display
    let resume = document.querySelector('.cv');
    let nameDisplay = resume.querySelector('#name');
    nameDisplay.innerHTML = firstName.value + " " + lastName.value;
}