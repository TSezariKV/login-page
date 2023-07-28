const submitButton = document.getElementById('submit-btn')
let userName
let userPassword

function getData() {
    userName = document.getElementById('name-input').value
    userPassword = document.getElementById('password-input').value

    if(userName && userPassword) {
        if(userName == localStorage.getItem('user')) {
            if(userPassword == localStorage.getItem('password')) {
                console.log('Success!!!')
            } else {
                console.log('Wrong Password!')
            }
        } else {
            console.log('Wrong Username!!!')
        }
    } else {
        console.log('Error!')
    }
}

submitButton.addEventListener('click', getData)