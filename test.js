  const scriptURL = 'https://script.google.com/macros/s/AKfycbyjn3eb-KOzK6_T_qlQFzMqoY2RiCkbqvw1ntBKin4NaLSZJL0/exec'
  var redirectUrl = 'platform.html';
  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
