// import emailjs from '@emailjs/browser';
const form = document.querySelector('.hero-form')
const footerForm=document.querySelector('.questions-form')
const headForm = document.querySelector('.order-form')
form.addEventListener('submit', sendEmail)
footerForm.addEventListener('submit', sendEmailFooter)
headForm.addEventListener('submit', sendEmailHead)
 const formData ={}

  function sendEmail(e) {
    e.preventDefault();
   
  
    emailjs.sendForm('service_1x6tfem', 'template_t43ncvi', form, 'ZzNvGgpBwsBSFGEzB')
      .then((result) => {
         
         form.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  function sendEmailHead(e) {
    e.preventDefault();
    
 
    emailjs.sendForm('service_1x6tfem', 'template_t43ncvi', headForm, 'ZzNvGgpBwsBSFGEzB')
      .then((result) => {
         console.log('ok');
      }, (error) => {
          console.log(error.text);
      });
  };

  function sendEmailFooter(e) {
    e.preventDefault();
    console.log('2');
  
   
   
    emailjs.sendForm('service_1x6tfem', 'template_t43ncvi', footerForm, 'ZzNvGgpBwsBSFGEzB')
      .then((result) => {
         console.log('ok');
      }, (error) => {
          console.log(error.text);
      });
  };

// 
