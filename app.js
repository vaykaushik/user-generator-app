// Retrieving elements from DOM

let profileImage = document.getElementById('image');
let fullName = document.getElementById('name');
let gender = document.getElementById('gender');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let country = document.getElementById('location');

let randomUserBtn = document.getElementById('generate-user');

// Executing 'getRandomUser()' function once button is clicked.

randomUserBtn.addEventListener('click', () => {
    getRandomUser();
});

// Defining Data

async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();

    const user = data.results[0];

    // Passing in user object to 'displayData()' as argument.

    displayUser(user);
}

// Displaying API data to relevant fields

function displayUser(person) {

    // The 'person' parameter is used as a placeholder to access properties inside the user object.    Without it, this is not possible.

    profileImage.src = `${person.picture.large}`;
    fullName.innerText = `${person.name.title} ${person.name.first} ${person.name.last}`;
    gender.innerText = `${person.gender}`;
    email.innerText = `${person.email}`;
    phone.innerText = `${person.cell}`;
    country.innerText = `${person.location.country}`;
}