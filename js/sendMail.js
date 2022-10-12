// import emailjs from '@emailjs/browser';
const form = document.querySelector('.hero-form')
const headForm = document.querySelector('.order-form')
const footerForm = document.querySelector('.questions-form')


form.addEventListener('submit', sendEmail)
footerForm.addEventListener('submit', sendEmailFooter)
headForm.addEventListener('submit', sendEmailHead)
const formData = {}

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_1h4x5fd', 'template_s6fulkd', form, 'oyCLGnfUu7C7xe4to')
    .then(() => {
      location.href = './successfulRequest.html'
      form.reset()
    }, (error) => {
      console.log(error.text);
    });
};

function sendEmailHead(e) {
  e.preventDefault();
  emailjs.sendForm('service_1h4x5fd', 'template_s6fulkd', headForm, 'oyCLGnfUu7C7xe4to')
    .then((result) => {
      headForm.reset()
      location.href = './successfulRequest.html'
    }, (error) => {
      console.log(error.text);
    });
};

function sendEmailFooter(e) {
  e.preventDefault();

  emailjs.sendForm('service_1h4x5fd', 'template_s6fulkd', footerForm, 'oyCLGnfUu7C7xe4to')
    .then((result) => {
      footerForm.reset()
      location.href = './successfulRequest.html'
    }, (error) => {
      console.log(error.text);
    });
};

// 
