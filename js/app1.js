const config = {
    apiKey: "AIzaSyCjBBgF3DjmltQuRu_PY6i-cQZR7gqOBww",
    authDomain: "contact-fc31e.firebaseapp.com",
    databaseURL: "https://contact-fc31e-default-rtdb.firebaseio.com",
    projectId: "contact-fc31e",
    storageBucket: "contact-fc31e.appspot.com",
    messagingSenderId: "901424514932",
    appId: "1:901424514932:web:d687c0e059acdebe104e21"
  };


firebase.initializeApp(config);
const RegistrationRef = firebase.database().ref('Registration')

document.getElementById('Registration-form').addEventListener('submit',RegistrationSubmit);

function RegistrationSubmit(e){
    e.preventDefault();
    const name = getInputValue('RecruitmentName')
    const email = getInputValue('RecruitmentEmail')
    const phone = getInputValue('RecruitmentContact')
    const PRNnumber = getInputValue('PRNNumber')
    const Department = getInputValue('Departments')
    const Hostel = getInputValue('Hostels')
    const Inspirational = getInputValue('Inspiration')
    const Curriculums = getInputValue('Curriculum')
    const Apply = getInputValue('Apply')

    saveMessage(name,email,phone,PRNnumber,Department,Hostel,Inspirational,Curriculums,Apply);

    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 5sec
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';  
    },3000)
    
    document.getElementById('Registration-form').reset()
}

function getInputValue(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,phone,PRNnumber,Department,Hostel,Inspirational,Curriculums,Apply) {
    const newRegistrationRef = RegistrationRef.push();
    newRegistrationRef.set({
       name :name,
       email :email,
       phone :phone,
       PRNNumber:PRNnumber,
       Department:Department,
       Hostel :Hostel,
       Inspiration :Inspirational,
       Curriculum :Curriculums,
       Apply:Apply
    });
}

