/**
* @description This function handles a login form submission. It prevents the default 
* form submission behavior, retrieves the email and password values, and sends a 
* POST request to the server with the login credentials.
* 
* @param { object } event - The `event` input parameter in the `loginFormHandler` 
* function is used to prevent the default form submission behavior, which would 
* refresh the page and override the asynchronous operation performed by the function.
*/
async function loginFormHandler(event) {
  event.preventDefault();
  //f

  const email = document.querySelector('#login').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/category/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
