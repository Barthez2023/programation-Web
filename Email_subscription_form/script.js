

const scriptURL = 'https://script.google.com/macros/s/AKfycbx8JxICHOEnZUGpRJgFNWk0CekCNZD4WVyzYo-hN8C5J64mIN1LhyRA2EmJD1glRWMMkQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById("msg");
form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Thanks You for Subscribing !!!"
            setTimeout(function(){
                msg.innerHTML=""
            },2000)
            console.log('Success!', response)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});