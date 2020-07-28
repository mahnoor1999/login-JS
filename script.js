
function email_check() {
    let correctEmail = document.querySelector("#email").value
    console.log(correctEmail);
    let myEmail = "mahnoor@gmail.com"
    console.log(myEmail);
    if (correctEmail == myEmail) {
        window.location.href = "password.html";
    }
    else {
        let errorline = "Couldn't find Your Google Account"
        document.querySelector("#email-error").innerHTML = errorline;


    }
}

// password
function password_checked() {
    let correctPassword = document.querySelector("#password").value
    console.log(correctPassword);
    let myPassword = "mahnoor123"
    console.log(myPassword);
    if (correctPassword == myPassword) {
        console.log("hey babes")
        window.location.href = "welcome.html";
    }
    else {
        let errorline = "Wrong password. Try again or click Forgot password to reset it."
        document.querySelector("#password-error").innerHTML = errorline;


    }
}
