function email_check() {
  let inputEmail = document.querySelector("#email").value;
  let myEmail = "mahnoor@gmail.com";
  if (inputEmail == myEmail) {
    return true;
  } else {
    let errorline = "Couldn't find Your Google Account";
    document.querySelector("#email-error").innerHTML = errorline;
    return false;
  }
}

// password
function password_check() {
  let inputPassword = document.querySelector("#password").value;
  let myPassword = "mahnoor123";
  if (inputPassword == myPassword) {
   return true;
  } else {
    let errorline =
      "Wrong password. Try again or click Forgot password to reset it.";
    document.querySelector("#password-error").innerHTML = errorline;
    return false;
  }
}
