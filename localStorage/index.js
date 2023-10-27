const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const storedNames = JSON.parse(localStorage.getItem('names')) || [];
    const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];

    storedNames.push(nameInput.value);
    storedEmails.push(emailInput.value);

    localStorage.setItem('names', JSON.stringify(storedNames));
    localStorage.setItem('emails', JSON.stringify(storedEmails));

    nameInput.value = '';
    emailInput.value = '';

    displayStoredData();
  }
}

function displayStoredData() {
  userList.innerHTML = ''; 

  const storedNames = JSON.parse(localStorage.getItem('names')) || [];
  const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];

  for (let i = 0; i < storedNames.length; i++) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${storedNames[i]}: ${storedEmails[i]}`));
    userList.appendChild(li);
  }
}


displayStoredData();
