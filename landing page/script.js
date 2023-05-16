const contactForm = document.getElementById("contact-form");

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});
async function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try{
    const response = await fetch('', {
        method : 'POST',
        headers :{
            'content-type':'application/json'
        },
        body: JSON.stringify({name, email, message}), 
    });

    if(response.ok){
        alert('Your message has been sent succesfully');
    } else{
        alert('Error! Your message was not sent!');
    }

  } catch(error){
    console.error(error);
    alert('An error occured');
  }
}
