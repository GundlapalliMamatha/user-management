var users = [];
var _Id;

// Fetch users from the server
function fetchUsers() {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            users = JSON.parse(httpRequest.responseText);
            populateUserDetails(); // Populate the user details after fetching users
        }
    }

    httpRequest.open('GET', 'http://localhost:4000/users');
    httpRequest.send();
}

// Call fetchUsers when the script loads
fetchUsers();

function populateUserDetails() {
    var urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('id');
    var user = users.find(user => user.id == userId);
    if (user) {
        _Id = userId;
        document.getElementById('name').value = user.Name;
        document.getElementById('email').value = user.email;
        document.getElementById('role').value = user.role;
        document.getElementById('status').value = user.status;
        document.getElementById('phoneNumber').value = user.phoneNumber;
        document.getElementById('address').value = user.address;
    }
}

function saveChanges() {
    var updatedUser = {
        id: _Id.toString(),
        Name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value,
        status: document.getElementById('status').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        address: document.getElementById('address').value
    };

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            alert('Updated user successfully');
            window.location.href = '../views/userlist.html'; // Navigate back to the user list
        }
    };

    httpRequest.open('PUT', `http://localhost:4000/users/${_Id}`);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(updatedUser));
}
