
const scriptURL = 'https://script.google.com/macros/s/AKfycbzoHn4RVZD8VTNhgEn7Td7XyQJITZ-5ZT-ujuXZXLQSCvYzmFvD-ZypwcvljBgnVrhKLQ/exec'
const form = document.forms['HireForm']
const success = document.getElementById('success')
const successClass = document.querySelector('.Success')
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        success.innerHTML="Data submitted successfully!";
        success.classList.add('successful')

        setTimeout(function(){
        success.innerHTML="";
        success.classList.remove('successful')
        },5000)
        form.reset();
    })
    .catch(error => {
        success.innerHTML="Failed to send Data, Add directly from discord.";
        success.classList.add('fail')

        setTimeout(function(){
        success.innerHTML="";
        success.classList.remove('fail')
        },5000)
        form.reset();
    })
})