const scriptURL = 'https://script.google.com/macros/s/AKfycbxtTureKdlPQORXey0IM0akly8CKVE1LAlFOgBPTGibK5_D6EkWZ_xFazr8fxMnUaiy/exec'
const form = document.forms['submit-to-google-sheet']
let message = document.querySelector("#msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            message.innerHTML = "Thanks You For Subscribing!";
            setInterval(() => {
                message.innerHTML = "";
            }, 5000);
            form.reset()

        })
        .catch(error => console.error('Error!', error.message))
})