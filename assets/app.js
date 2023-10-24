function addDiv(btn){
    let parent = btn.parentElement.querySelector(".container");
    let prototype = parent.firstElementChild;
    parent.appendChild(prototype.cloneNode(true));
}

let mainForm = document.querySelector('.sectionHolder');

let firstNameElement = mainForm.querySelector('#firstName'),
    lastNameElement = mainForm.querySelector('#lastName'),
    emailElement = mainForm.querySelector('#email'),
    cityElement = mainForm.querySelector('#city'),
    stateElement = mainForm.querySelector('#state'),
    phoneElement = mainForm.querySelector('#phone');

let resume = document.querySelector('.cv');

let nameDisplayElement = resume.querySelector('#nameDisplay'),
    placeDisplayElement = resume.querySelector("#placeDisplay"),
    phoneDisplayElement = resume.querySelector("#phoneDisplay"),
    emailDisplayElement = resume.querySelector("#emailDisplay");

function getData(){
    return {
        name: firstNameElement.value + " " + lastNameElement.value,
        place: cityElement.value + ", " + stateElement.value,
        email : emailElement.value,
        phone: phoneElement.value
    }
}

function showData(userData){
    nameDisplayElement.innerHTML = userData.name;
    placeDisplayElement.innerHTML = userData.place;
    emailDisplayElement.innerHTML = userData.email;
    phoneDisplayElement.innerHTML = userData.phone;

}

function generateCV(){
    let userData = getData();
    showData(userData);
}


function printCV(){
    window.print();
}