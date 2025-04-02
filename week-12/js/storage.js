// Reference variables
const loginFormRef = document.querySelector("#login");
const usernameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");

const contentRef = document.querySelector("#content");
const logoutRef = document.querySelector("#logout");

let activeUser = JSON.parse(localStorage.getItem("activeUser") || "{}");

function loginUser(e) {
    e.preventDefault();
    const username = usernameRef.value;
    const password = passwordRef.value;
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    let userFound = false;
    let correctPassword = false;

for (let i = 0; i < users.length; i++) {
       const currentUser = users[i];
       if ( currentUser.username === usernameValue)
        userFound = true;

        if (currentUser.password === passwordValue){

        }
        
    }
    if (userFound === false){
        users.push({ username: usernameValue, password: passwordValue });
        localStorage.setItem("users", JSON.stringify(users));

        activeUser = {username: usernameValue};
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    }
    else if (correctPassword === false){
        alert("Incorrect Password");
    }
    else {
        alert("Login Successful");
    }

toggleLogin();
}











function toggleLogin() {
    if (!activeUser.username) {
        loginFormRef.style.display = "block";
        contentRef.style.display = "none";
    } else {
        loginFormRef.style.display = "none";
        contentRef.style.display = "block";
    }
}
function logoutUser () {
    localStorage.removeItem("activeUser");
    activeUser = {};
    toggleLogin();
}
loginFormRef.onsubmit = loginUser;

logoutFormRef.onclick = logoutUser;

toggleLogin();