var users = [];
function fetchUsers(userId) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var users = JSON.parse(httpRequest.responseText);
            //console.log(users);
            // Use the fetched users data if needed
        }
    };

    httpRequest.open('GET', 'http://localhost:4000/users/'+userId,true);
    httpRequest.send();
}
fetchUsers();
function passwordChangeBtn() {
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
}
    
    var userId = document.getElementById('email').value; // Assuming email is the userId
    for (var i = 0; i < users.length; i++){
      console.log(users[i]);
        var updatedPassword = {
           // email: document.getElementById('email').value,
           // password: document.getElementById('newPassword').value,
           
           Name: users[i].name,
           email: userId,
           password:document.getElementById("newPassword").value,
           role: users[i].role,
           status: users[i].status,
           phoneNumber: users[i].phoneNumber,
           address: users[i].address
    }
}
    

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            window.alert('Password reset successfully');
            // Optional: Fetch users again if needed
            fetchUsers(userId);
        
    };

    httpRequest.open('PUT', 'http://localhost:4000/users/' + userId, true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(updatedPassword));
}


