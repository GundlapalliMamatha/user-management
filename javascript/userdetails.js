// var users = [];
// var httpRequest = new XMLHttpRequest();

//     httpRequest.onreadystatechange = function () {
//         if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//             users = JSON.parse(httpRequest.responseText);
//             createTable(); // Create table after fetching users
//         }
//     }

//     httpRequest.open('GET', 'http://localhost:4000/users');
//     httpRequest.send();

//     var viewUsersStr='';
//     for(var i=0;i<users.length;i++){
//       viewUsersStr+=`
//       <div id="users-tbody">
//              <p>Name:${users[i].Name}</p>
//              <p>Email:${users[i].email}</p>
            
//              <p>Role:${users[i].role}</p>
//              <p>Status:${users[i].status}</p>
//       </div>`
    
//     };
//     document.getElementById('users-tbody').innerHTML=viewUsersStr;
//var userDetailsTable = localStorage.getItem(JSON.parse('usertoken'));
var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('id');

function fetchUserDetails() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var user = JSON.parse(httpRequest.responseText);
            displayUserDetails(user);
           // localStorage.setItem('usedetailTableToken',JSON.stringify('userDetailsTable'));
        }
    }
    httpRequest.open('GET', 'http://localhost:4000/users/' + userId);
    httpRequest.send();
}

function displayUserDetails(user) {
    var userDetailsStr = `
        <p>Name: ${user.Name}</p>
        <p>Email: ${user.email}</p>
        <p>Role: ${user.role}</p>
        <p>Status: ${user.status}</p>
        <p>Phone Number: ${user.phoneNumber}</p>
        <p>Address: ${user.address}</p>`;
        
    document.getElementById('user-details').innerHTML = userDetailsStr;
    
}

fetchUserDetails();

    


// function displayUsers(){
//     var viewUsersStr='';
//     for(var i=0;i<users.length;i++){
//       viewUsersStr+=`
//       <div id="users-tbody">
//              <p>Name:${users[i].Name}</p>
//              <p>Email:${users[i].email}</p>
            
//              <p>Role:${users[i].role}</p>
//              <p>Status:${users[i].status}</p>
//       </div>`
    
//     };
//     document.getElementById('users-tbody').innerHTML=viewUsersStr;
// }




