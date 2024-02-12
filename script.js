document.getElementById('menu-icon').addEventListener('click', function () {
  var nav = document.querySelector('nav');
  nav.classList.toggle('show');
});


//contact.html

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "guys199421@gmail.com",
    Password: "password",
    To: 'guys199421@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New contact form inquiry",
    Body: "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Phone No: " + document.getElementById("phone").value
          + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message Sent Sucesfully")
  );
}


//login.html
function loginpage(){
  window.location.href="login.html";
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const bthPopup = document.querySelector('.btn');


document.addEventListener('DOMContentLoaded', function () {
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  function setupLearnerCounter(cookieKey, displayElementId, buttonElementId, linkPage) {
    let learner = parseInt(getCookie(cookieKey)) || 0;

    function cpp(event, course) {
      event.preventDefault();
      learner++;
      updateLearnerCount(course);
      LocalStorage(course);
      window.location.href = linkPage;
    }

    function LocalStorage(course) {
      setCookie(cookieKey, learner, 365);
    }

    function updateLearnerCount(course) {
      document.getElementById(displayElementId).innerHTML = `${learner} learner/s`;
    }

    const buttonElement = document.getElementById(buttonElementId);

    if (buttonElement) {
      buttonElement.addEventListener("click", function (event) {
        cpp(event, buttonElementId.replace("again", ""));
      });
    } else {
      console.error(`Button element with ID '${buttonElementId}' not found.`);
    }

    updateLearnerCount(buttonElementId.replace("again", ""));
  }

  // Example usage for JavaScript Course
setupLearnerCounter("JSLearner", "WorkJS", "againJS", "/cource/javascript.html");
setupLearnerCounter("HTMLLearner", "WorkHTML", "againHTML", "/cource/html.html");
setupLearnerCounter("CSSLearner", "WorkCSS", "againCSS","/cource/css.html");
setupLearnerCounter("JavaLearner", "WorkJava", "againJava","/cource/java.html");
setupLearnerCounter("CppLearner", "WorkCpp", "againCpp","/cource/cpp.html");
setupLearnerCounter("PythonLearner", "WorkPython", "againPython","/cource/python.html");
});
document.getElementById("nightModeLi").addEventListener("click", () => {
  let body = document.getElementsByTagName("body")[0];
  let text = document.querySelector(".feature h2");
  let text2=document.querySelector("#course h2");
  let text3=document.querySelector("#course span");
  let text4=document.querySelector(".reminder p");
  let darkmode = document.querySelector("#nightModeLi_img");
  let currentColor = getComputedStyle(body).backgroundColor;

  // Toggle background color
  body.style.backgroundColor = (currentColor === "rgb(0, 5, 5)") ? "rgb(240, 240, 240)" : "rgb(0, 5, 5)";
  
  // Toggle dark mode button color based on background color
  if (body.style.backgroundColor === "rgb(0, 5, 5)") {
      darkmode.style.backgroundColor = "rgb(100, 100, 100)";
  } else {
      darkmode.style.backgroundColor = ""; // Reset the background color
  }

  // Toggle text color based on background color
  let newColor = getComputedStyle(body).backgroundColor;
  var elements = [text, text2, text3, text4];
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = (newColor === "rgb(0, 5, 5)") ? "white" : "black";
}
});

registerLink.addEventListener('click', () => wrapper.classList.add('active'));
loginLink.addEventListener('click', () => wrapper.classList.remove('active'));
bthPopup.addEventListener('click', () => wrapper.classList.add('active-popup'));

//redirect to login.html page

