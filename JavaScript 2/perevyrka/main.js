function showModal(id){
    document.getElementById(id).classList.add('show')

}
function hideModal(id){
    document.getElementById(id).classList.remove('show')

}
function saveTask(){
    let textarea = document.getElementById('text_area').value;
    let sele = document.getElementById('sele').value;
    let task = {
        describe: textarea,
        status: sele
    }
   db.collection('')
}