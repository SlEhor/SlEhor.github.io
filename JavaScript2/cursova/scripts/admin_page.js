function towars(){

}



function add_towar(){
let clothes = {
    name:           document.getElementById('towar_name').value,
    price:          document.getElementById('towar_price').value,
    type:           document.getElementById('towar_type').value,
    brend:          document.getElementById('towar_brend').value,
    photo:          document.getElementById('towar_photo').value,
    hoot:           document.getElementById('towar_hoot').checked,
    color:          document.getElementById('towar_color').value,
    gender:         document.getElementById('towar_gender').value,
    size:           document.getElementById('towar_size').value,
    
    description:    document.getElementById('towar_description').value
   
}
db.collection('all_towars').doc().set(clothes).then(res=>{
console.log('Успішно додано');
window.location.reload();

})

}
function none_block(id_block){

var add_towar = document.getElementById(id_block);

add_towar.style.display = "none";

}
function yes_block(id_block){

var add_towar = document.getElementById(id_block)

add_towar.style.display = "block"
}


function drawTowar(object,nomer){
    let tbody = document.getElementById('tbody');
    
    tbody.innerHTML += `
                <tr>
                    <td class="black">${nomer}</td>
                    <td class="black">${object.name}</td>
                    <td class="black">${object.type}</td>
                    <td class="black">${object.brend}</td>
                    <td class="black">${object.photo}</td>
                    <td class="black">${object.description}</td>
                    <td class="black">${object.price}</td>
                    
                    <td class="black">${object.gender}</td>
                    <td class="black">${object.size}</td>
                    
                    
                    <td class="black">${object.hoot}</td>
                    <td class="black"><button type="button" class="btn btn-outline-warning" onclick="uid_us('${object.id}')" >Редагувати</button></th>
                    <td class="black"><button type="button" class="btn btn-outline-danger" onclick="delTowar('${object.id}')">X</button></td>
                    
                </tr>
            
    `

}

function getTowar(){
    tbody.innerHTML = '';
    let index = 1
    db.collection('all_towars').get().then(res =>{
        res.forEach(doc=>{
            let one_towar = doc.data();
            one_towar.id = doc.id;
            drawTowar(one_towar,index)
            index++
        })


    })


}
getTowar()
function delTowar(belicimo){
   
    db.collection('all_towars').doc(belicimo).delete().then(res=>{
        getTowar()
    })
}
function uid_us(id_u){
    db.collection('all_towars').doc(id_u).get().then(res=>{
        let object2 = res.data();
        object2.id = res.id;
        console.log(object2.id)
    document.getElementById('towar_name_edit').value      = object2.name;
    document.getElementById('towar_price_edit').value         = object2.price;
    document.getElementById('towar_type_edit').value          = object2.type;
    document.getElementById('towar_brend_edit').value         = object2.brend;
    document.getElementById('towar_photo_edit').value         = object2.photo;
    document.getElementById('towar_hoot_edit').value          = object2.hoot;
    document.getElementById('towar_color_edit').value         = object2.color;
    document.getElementById('towar_gender_edit').value        = object2.gender;
    document.getElementById('towar_size_edit').value          = object2.size;
   
    document.getElementById('towar_description_edit').value   = object2.description;
    
    document.getElementById('savechanges').addEventListener('click',function(){
        let clothes = {
            name:       document.getElementById('towar_name_edit').value,

            price:          document.getElementById('towar_price_edit').value,
            type:           document.getElementById('towar_type_edit').value,
            brend:          document.getElementById('towar_brend_edit').value,
            photo:          document.getElementById('towar_photo_edit').value ,
            hoot:           document.getElementById('towar_hoot_edit').checked,
            color:          document.getElementById('towar_color_edit').value,
            gender:         document.getElementById('towar_gender_edit').value,
            size:           document.getElementById('towar_size_edit').value,
            description:    document.getElementById('towar_description_edit').value
            
        }
        save_Changes(object2.id,clothes)
    })


        yes_block('edit_towar')
    })
 
}
function save_Changes(idshka, object){
db.collection('all_towars').doc(idshka).set(object).then(res=>{
    console.log('Усапішна змінна')
})
none_block('edit_towar')

getTowar()

}
