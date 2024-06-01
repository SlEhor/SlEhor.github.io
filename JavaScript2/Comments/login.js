function login(){
    let user = {
        email: email.value,
        password: password.value
       

    }
    
    db.collection('all_users').get().then(res => {
        res.forEach(doc=>{
            
            if(user.email == doc.data().email){
               if(user.password == doc.data().password){
                localStorage.setItem('user_login', JSON.stringify(user))
               }
               
            }
        })
    })
}