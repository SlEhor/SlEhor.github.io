// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMvYqzp189Udod36msLlTroo7jHxOUslA",
    authDomain: "egorka-project-1.firebaseapp.com",
    projectId: "egorka-project-1",
    storageBucket: "egorka-project-1.appspot.com",
    messagingSenderId: "515780160890",
    appId: "1:515780160890:web:35aaf0fd2e386bc6443ac3",
    measurementId: "G-2PSC9KVHRY"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();




let users = [];


























  
function showModal(w){
    document.getElementById(w).classList.add('show')




   
}
function hideModal(q){
    document.getElementById(q).classList.remove('show')
}
function addUser(){
    let user_info = {
        name: document.getElementById('user_name').value,
        phone:document.getElementById('user_phone').value,
        email:document.getElementById('user_email').value,
        password: document.getElementById('user_password').value
    }
        
    db.collection('all_users').add(user_info).then(res => {
         hideModal('newTaskModal')
        console.log('Успіх!')
        document.getElementById('user_name').value=''
        document.getElementById('user_phone').value=''
        document.getElementById('user_email').value=''
        document.getElementById('user_password').value=''
    })
    
}

function drawUsers(){
    users = []
    db.collection('all_users').get().then(res =>{
    res.forEach(doc => {
        let user = doc.data();
        user.db_id = doc.id;
        users.push(user)
    })
    console.log(users)
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    let index = 1;
    users.forEach(use => {
       
        tbody.innerHTML += `
            <td>${index}</td>
            <td>${use.name}</td>
            <td>${use.phone}</td>
            <td>${use.email}</td>
            <td>${use.password}</td>
            <td><button type="button" class="btn btn-outline-warning" onclick="fillField('${use.db_id}')">Змінити</button></td>
            <td><button type="button" class="btn btn-outline-danger" onclick="del_users('${use.db_id}')">X</button></td>
        
        
        `
        index++

    })
})
}
drawUsers()
function fillField(number){
    showModal('editTaskModal')
    db.collection('all_users').doc(number).get().then(res =>{
              let user = res.data()
            document.getElementById('user_name_edit').value = user.name;
            document.getElementById('user_phone_edit').value = user.phone;
            document.getElementById('user_email_edit').value = user.email;
            document.getElementById('user_password_edit').value = user.password;
})
    document.getElementById('save').setAttribute('onclick', `editInfo('${number}')`)
    
}

function editInfo(number){
   let user = {
    name:document.getElementById('user_name_edit').value,
    phone:document.getElementById('user_phone_edit').value,
    email:document.getElementById('user_email_edit').value,
    password:document.getElementById('user_password_edit').value
   }
   db.collection('all_users').doc(number).set(user).then(res =>{
    console.log(`Успішно оновлено!`)
    hideModal('editTaskModal')
    drawUsers()
   })
}
function del_users(number){
db.collection('all_users').doc(number).delete().then(res =>{
    console.log('видалено')
    drawUsers()
})

}