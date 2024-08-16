var users = [];

// Fetch users from the server
function fetchUsers() {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            users = JSON.parse(httpRequest.responseText);
            createTable(); // Create table after fetching users
        }
    };

    httpRequest.open('GET', 'http://localhost:4000/users');
    httpRequest.send();
}

// Call fetchUsers when the script loads
fetchUsers();

// Create a table based on fetched users
function createTable() {
    var usersStr = '';
    for (var i = 0; i < users.length; i++) {
        usersStr += `
            <tr>
                <td><a href="userdetails.html?id=${users[i].id}">${users[i].Name}</a></td>
                <td>${users[i].email}</td>
                <td>${users[i].role}</td>
                <td>${users[i].status}</td>
                <td>
                    <button onclick="navigateToEdit(${users[i].id})">Edit</button>
                    <button onclick="deleteUser(${users[i].id})">Delete</button>
                </td>
            </tr>
        `;
    }

    document.getElementById('userTable').style.display = 'block';
    document.getElementById('users-tbody').innerHTML = usersStr;
}

function navigateToEdit(userId) {
    window.location.href = `edituserdetails.html?id=${userId}`;
}

// Delete user functionality
function deleteUser(userId) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            alert('User deleted successfully');
            fetchUsers(); // Refresh the user list
        }
    };

    httpRequest.open('DELETE', `http://localhost:4000/users/${userId}`);
    httpRequest.send();
}

// Search by role and status
function searchByRole() {
    var role = document.getElementById("roleFilter").value;
    var status = document.getElementById("statusFilter").value;
    var filteredUsers = users.filter(user => user.role === role && user.status === status);
    var filteredStr = '';

    for (var i = 0; i < filteredUsers.length; i++) {
        filteredStr += `
            <tr>
                <td><a href="userdetails.html?id=${filteredUsers[i].id}">${filteredUsers[i].Name}</a></td>
                <td>${filteredUsers[i].email}</td>
                <td>${filteredUsers[i].role}</td>
                <td>${filteredUsers[i].status}</td>
                <td>
                    <button onclick="navigateToEdit(${filteredUsers[i].id})">Edit</button>
                    <button onclick="deleteUser(${filteredUsers[i].id})">Delete</button>
                </td>
            </tr>
        `;
    }

    document.getElementById('userTable').style.display = 'block';
    document.getElementById('users-tbody').innerHTML = filteredStr;
}
