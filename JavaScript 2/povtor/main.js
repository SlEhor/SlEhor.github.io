function register(){
    let name = document.getElementById('name').value;
   
    let email = document.getElementById('email').value;
 
    let password = document.getElementById('password').value;

   
    let user = {
        username: name,
        email: email,
        password: password

    }
     console.log(user);
     db.collection('reg_test').add(user).then(res => {
        console.log('успіх')
     })
}