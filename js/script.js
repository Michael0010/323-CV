const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'headShake')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'headShake')
}))



const htmlbar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()

$.fn.isOnScreen = function(){

    var win = $(window);
  
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
  
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
  
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  };
  
  $(window).scroll(function() {
    if ($('#progressbarJS').isOnScreen() == true) {
        t1.fromTo(htmlbar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
        .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
        .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
        .fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})
    }
  });
const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})

var firebaseConfig = {
    apiKey: "AIzaSyB6Izsku_qLcnr9lc0Ivj5eejB7-5FCaRE",
    authDomain: "test-form-d3492.firebaseapp.com",
    databaseURL: "https://test-form-d3492.firebaseio.com",
    projectId: "test-form-d3492",
    storageBucket: "test-form-d3492.appspot.com",
    messagingSenderId: "222398070278",
    appId: "1:222398070278:web:bf51f5c8a26dcfff9ecd87",
  };

  firebase.initializeApp(firebaseConfig);
  

  let contactInfo = firebase.database().ref("infos");
  


document.querySelector(".contact").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
  
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    
   
    console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}


function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
function sendEmail(name, email, message){
    email.send({
        Host: "smtp.gmail.com",
        Username: "michaelcvemail@gmail.com",
        Password: "123456789michael",
        To: "michaelcvemail@gmail.com",
        From: "michaelcvemail@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("mail has been sent"))
}



