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
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    const id = Date.now();
    const entry = {
      id,
      name: nameInput.value,
      email: emailInput.value,
    };
    storedData.push(entry);
    localStorage.setItem('userData', JSON.stringify(storedData));
    nameInput.value = '';
    emailInput.value = '';
    displayStoredData();
  }
}

function displayStoredData() {
  userList.innerHTML = '';

  const storedData = JSON.parse(localStorage.getItem('userData')) || [];

  storedData.forEach((entry) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${entry.name}: ${entry.email}`));

    const btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Delete'));
    btn.className = 'deletebtn';

    btn.addEventListener('click', function () {
      const updatedData = storedData.filter((item) => item.id !== entry.id);
      localStorage.setItem('userData', JSON.stringify(updatedData));
      displayStoredData();
    });

    li.appendChild(btn);
    userList.appendChild(li);
  });
}

displayStoredData();
