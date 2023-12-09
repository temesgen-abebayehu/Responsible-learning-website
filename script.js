document.getElementById('menu-icon').addEventListener('click', function () {
  var nav = document.querySelector('nav');
  nav.classList.toggle('show');
});


//contact.html

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "guys199421@gmail.com",
    Password: "guys@199421",
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

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const bthPopup = document.querySelector('.btn');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => wrapper.classList.add('active'));
loginLink.addEventListener('click', () => wrapper.classList.remove('active'));
bthPopup.addEventListener('click', () => wrapper.classList.add('active-popup'));
iconClose.addEventListener('click', () => wrapper.classList.remove('active-popup'));

//redirect to login.html page

function loginpage(){
  window.location.href="login.html";
}