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

                console.log('Success!!!')
                console.log(localStorage.getItem('user'), localStorage.getItem('password'))
            } else {
                console.log('Username should be at least 3 characters long')
            }
        } else {
            console.log('Password must be at least 8 characters long')
        }
    } else {
        console.log('Registration failed')
    }
}

submitButton.addEventListener('click', saveData)