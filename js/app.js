const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
  let duration = Math.random() * (1.2 - 0.6) + 0.6;
  star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});
 
 
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
// 2nd form
const messageRef = firebase.database().ref('Messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getInputVal('name')
    const email = getInputVal('email')
    const phone = getInputVal('phone')
    const subject = getInputVal('subject')
    const message = getInputVal('message')

    saveMessage(name, email, phone, subject, message);

    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 5sec
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';  
    },3000)
    document.getElementById('contactForm').reset()
}

function getInputVal(id) {
    return document.getElementById(id).value;
}


function saveMessage(name, email, phone, subject, message) {
    const newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    });
}

ScrollReveal().reveal('.home-text',{ delay: 500, reset:true ,distance:'100px',duration:1000,origin:'left'});
ScrollReveal().reveal('.home-img',{ delay: 300 , reset:true ,distance:'100px',duration:700 ,origin:'right'});
ScrollReveal().reveal('.home-text',{ delay: 500 , reset:true ,distance:'100px',duration:800});
ScrollReveal().reveal('.how-it-works-item',{ delay: 500 , reset:true ,distance:'100px',duration:800 });
ScrollReveal().reveal('.home-text',{ delay: 500 , reset:true ,distance:'100px',duration:800});
ScrollReveal().reveal('.scroll1',{ delay: 300 , reset:true ,distance:'15px',duration:700 ,origin:'left'});
ScrollReveal().reveal('.scroll2',{ delay: 300 , reset:true ,distance:'15px',duration:700 ,origin:'right'});
