function login(){
    let username = document.getElementById('username').value
    let pass = document.getElementById("pass").value;

    if (username === "admin" && pass === "admin"){
        window.location.pathname = "res/pages/home.html"
    }else{
        alert("Incorrect username or password, sorry :(");
    }
}