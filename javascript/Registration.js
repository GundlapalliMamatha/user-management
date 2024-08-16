var users = [];
function fetchUsers() {

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            users = JSON.parse(httpRequest.responseText);
        
        }
    }

    httpRequest.open('GET', 'http://localhost:4000/users');

    httpRequest.send();
}

fetchUsers();
function createUsers() {
    
    var _Name = document.getElementById('name').value;
    var _Email = document.getElementById('email').value;
    var _Password = document.getElementById('psw').value;
    var _Confirmpassword = document.getElementById('psw-repeat').value;
    var _Role = document.getElementById('role').value;
    var _Status = document.getElementById('status').value;
    

    var users1 = {
        id: (users.length + 1).toString(),
        Name: _Name,
        email: _Email,
        password:_Password,
        confirmpassword:_Confirmpassword,
        role:_Role,
        status:_Status,
       
    };

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 201) {
            window.alert('Created customer successfully');
            window.location.href="../views/login.html";
            //fetchUsers();
        }
    }

    httpRequest.open('POST', 'http://localhost:4000/users');

    httpRequest.send(JSON.stringify(users1));
    console.log(users1);

}
