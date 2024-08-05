async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to display data on the webpage
function displayData(users) {
    const container = document.getElementById('user-container');

    users.map(user => {
        // Create a div element for each user
        const userBox = document.createElement('div');
        userBox.className = 'user-box';

        // Create content for each user box
        userBox.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
      `;

        // Append the user box to the container
        container.appendChild(userBox);
    });
}

fetchData();