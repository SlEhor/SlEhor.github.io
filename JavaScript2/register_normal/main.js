function google_auth(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
        console.log(credential)
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      console.log(token)
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      create_user(user.email,user.displayName,user.photoURL,user.uid)
      // IdP data available in result.additionalUserInfo.profile.
        // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
function google_signOut(){
    firebase.auth().signOut().then(() => {
        console.log('Успішно вийшли з аккаунту')
      }).catch((error) => {
        console.log('Помилка')
      });
}

function create_user(user_email,user_name,user_photoUrl,user_uid){
    let user = {
        email: user_email,
        name: user_name, 
        photoUrl:user_photoUrl
    }
    db.collection('reg_true').doc(user_uid).set(user).then(res=>{
        console.log(`Успіх!`)
    })
}

function registration(){
    let email_reg = document.getElementById('email').value;
    let pass_reg = document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email_reg, pass_reg)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      // ..
    });
}
function change(){
  let form = document.getElementById('form')
  form.innerHTML =``
  form.innerHTML = `
  <label for="">Пошта</label><br><input type="text" class="reg_inp" id="email"><br><br>
   
  <label for="">Пароль</label><br><input type="text" class="reg_inp" id="pass"><br><br>
  <button type="button" class="btn btn-danger" onclick="registration()" >Ввійти</button><br>
`
}
function registration_email(){


}
