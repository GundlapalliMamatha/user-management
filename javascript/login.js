
// var users = [];
// function fetchUsers() {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function () {
//         if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//             users = JSON.parse(httpRequest.responseText);
//         }
//     httpRequest.open('GET', 'http://localhost:4000/users');
//     httpRequest.send();
//     }
// }
// fetchUsers();

// //document.getElementById('email').value = 'admin';
// function logIn() {
//     var _Email = document.getElementById('email').value;
//     var _Password = document.getElementById('password').value;
//     var filteredUser;

//     for (var i = 0; i < users.length; i++) {
//         if (users[i].email == _Email && users[i].password == _Password) {
//           //localStorage.setItem('user', JSON.stringify(users[i]));
//           var  filteredUser = users[i];
//           //console.log("filteredUser");
//         //   if(users[i].role==='admin'){
//         //     var loginAdminDetails = users[i];
//         //     localStorage.setItem('admintoken',JSON.stringify(loginAdminDetails));
//         //     console.log(usertoken);
//         //   }else if(users[i].role==='user'){
//         //    var loginUserDetails = users[i];
//         //    localStorage.setItem('usertoken',JSON.stringify(loginUserDetails));
//         //   }
//         }
//     }
// }
//     if (filteredUser) {

//         alert("success");
//         //localStorage.setItem('loggedInUserEdit', JSON.stringify(LoggedInUser));
//         window.location.href = '../views/userlist.html';
//     } else {
//         alert('Incorrect email or password');
//     }

// // Ensure fetchUsers completes before logIn is called
// document.getElementById('loginButton').addEventListener('click', function() {
//     fetchUsers(logIn);
// });
var users = [];
// Fetch users from the server
function fetchUsers(callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            users = JSON.parse(httpRequest.responseText);
            if (callback) {
                callback();
            }
        }
    }
    httpRequest.open('GET', 'http://localhost:4000/users');
    httpRequest.send();
}
// Create new user
function logIn() {
    var _Email = document.getElementById('email').value;
    var _Password = document.getElementById('password').value;
    var filteredUser = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == _Email && users[i].password == _Password) {
            filteredUser = users[i];
        }
    }
    if (filteredUser) {
        alert("success");
        window.location.href = '../views/userlist.html';
    } else {
        alert('Incorrect email or password');
    }
}
// Ensure fetchUsers completes before logIn is called
document.getElementById('loginButton').addEventListener('click', function() {
    fetchUsers(logIn);
});