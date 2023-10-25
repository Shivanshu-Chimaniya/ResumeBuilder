function addDiv(btn){
    let parent = btn.parentElement.querySelector(".container");
    let prototype = parent.firstElementChild;
    parent.appendChild(prototype.cloneNode(true));
}

let mainForm = document.querySelector('.sectionHolder');

// simple Elements
let firstNameElement = mainForm.querySelector('#firstName'),
    lastNameElement = mainForm.querySelector('#lastName'),
    emailElement = mainForm.querySelector('#email'),
    cityElement = mainForm.querySelector('#city'),
    stateElement = mainForm.querySelector('#state'),
    phoneElement = mainForm.querySelector('#phone'),
    jobTitleElement = mainForm.querySelector('#designation'),
    summaryElement = mainForm.querySelector('#summary');


let resume = document.querySelector('.cv');

// display krne waale elements
let nameDisplayElement = resume.querySelector('#nameDisplay'),
    placeDisplayElement = resume.querySelector("#placeDisplay"),
    phoneDisplayElement = resume.querySelector("#phoneDisplay"),
    emailDisplayElement = resume.querySelector("#emailDisplay"),
    jobTitleDisplayElement = resume.querySelector('#jobTitle'),
    summaryDisplayElement = resume.querySelector('#summaryDisplay'),
    skillDisplayElement = resume.querySelector('#skillDisplay'),
    projectDisplayElement = resume.querySelector('#projectDisplay'),
    educationDisplayElement = resume.querySelector('#educationDisplay'),
    achievementDisplayElement = resume.querySelector('#achievementDisplay'),
    languageDisplayElement = resume.querySelector('#languageDisplay');


function getData(){
    let skillsList = mainForm.querySelectorAll(".skillElem"),
        projectList = mainForm.querySelectorAll(".projectElem"),
        educationList = mainForm.querySelectorAll(".educationElem"),
        achievementList = mainForm.querySelectorAll(".achievementElem"),
        languageList = mainForm.querySelectorAll(".languageElem");
  
    return {
        name: firstNameElement.value + " " + lastNameElement.value,
        place: cityElement.value + ", " + stateElement.value,
        email : emailElement.value,
        phone: phoneElement.value,
        jobTitle: jobTitleElement.value,
        summary: summaryElement.value,
        skills: arrangeDataInList(skillsList),
        projects: arrangeDataInDiffWay(projectList),
        educations: arrangeDataInDiffWay(educationList),
        achievements : arrangeDataInList(achievementList),
        languages : arrangeDataInList(languageList)
    }
}

function showData(userData){
    nameDisplayElement.innerHTML = userData.name;
    placeDisplayElement.innerHTML = userData.place;
    emailDisplayElement.innerHTML = userData.email;
    phoneDisplayElement.innerHTML = userData.phone;
    jobTitleDisplayElement.innerHTML = userData.jobTitle;
    summaryDisplayElement.innerHTML = userData.summary;
    skillDisplayElement.innerHTML = userData.skills;
    projectDisplayElement.innerHTML = userData.projects;
    educationDisplayElement.innerHTML = userData.educations;
    achievementDisplayElement.innerHTML = userData.achievements;
    languageDisplayElement.innerHTML = userData.languages;
}

function arrangeDataInList(dataList){
    console.log(dataList);
    let str = "";
    for(i=0; i<dataList.length; i++){
        str += "<li>" + dataList[i].value + "</li>";
    }
    return str;
}

function arrangeDataInDiffWay(dataList){
    let str = "";
    for(i=0; i < dataList.length; i++){
        str += "<h3>" + (dataList[i].querySelector(".title")).value + "</h3>";
        str += "<p class = 'project'>" + (dataList[i].querySelector(".desc")).value + "</p>";
    }
    return str;
}

function generateCV(){
    let userData = getData();
    showData(userData);
}

function printCV(){
    window.print();
}