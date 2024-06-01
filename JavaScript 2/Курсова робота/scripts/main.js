window.onload = function(){
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}











function drawForBlock(towar){
    let  towars = document.getElementById('towars');
   // towars.innerHTML = ""
   
   
       
        
        let golovnyi_block = document.createElement('div');
        golovnyi_block.classList.add('one_towar');

        let photo1 = document.createElement('div');
        photo1.classList.add('photo1');

        let img_towar = document.createElement('img');
        img_towar.classList.add('photo2')
        img_towar.setAttribute('src', towar.photo)
        

        let down_blocks = document.createElement('div');
        down_blocks.classList.add('down_block');

        let name_block = document.createElement('div');
        name_block.classList.add('name');

        name_towar = document.createElement('h5');
        name_towar.setAttribute('align', 'center')
        name_towar.innerText = towar.name;

        let buy_block = document.createElement('div');
        buy_block.classList.add('buy');

        let towar_price = document.createElement('div');
        towar_price.classList.add('price');
        towar_price.innerText = towar.price;

        let buy_buttons = document.createElement('button');
        buy_buttons.addEventListener('click' , function(){});

        let img_koshik = document.createElement('img');
        img_koshik.classList.add('koshik2');
        img_koshik.setAttribute('src', 'koshik.svg')

        let color_towar = document.createElement('div');
        color_towar.classList.add('color' );
        color_towar.innerText = towar.color;

        let towar_size = document.createElement('div');
        towar_size.classList.add('size');
        towar_size.innerText = towar.size;

       
       buy_buttons.appendChild(img_koshik);
        photo1.appendChild(img_towar);
        name_block.appendChild(name_towar);
        buy_block.appendChild(towar_price);
         buy_block.appendChild(buy_buttons);
        
       
        
        
        
        down_blocks.appendChild(name_block);
        down_blocks.appendChild(buy_block);
        down_blocks.appendChild(color_towar);
        down_blocks.appendChild(towar_size);

        golovnyi_block.appendChild(photo1);
        golovnyi_block.appendChild(down_blocks);


        towars.appendChild(golovnyi_block);
    
    


   
}


function giga_vuvid(){
    let  towars = document.getElementById('towars');
let filter = JSON.parse(localStorage.getItem('filter'))
db.collection('all_towars').get().then(res=>{
        let massive = [];
       
        res.forEach(doc=>{
        let towar = doc.data()
        towar.id = doc.id
        massive.push(towar)
    }) 
    let massive_filtrat = massive.slice();

if(filter != null){
    if(filter.name != ""){
        towars.innerHTML = ""
    massive_filtrat = massive_filtrat.filter(towar=>{
        return towar.name.toLowerCase().includes(filter.name.toLowerCase());
    })
    }
    if(filter.type != ""){
        towars.innerHTML = ""
    massive_filtrat = massive_filtrat.filter(towar=>{
        return towar.type == filter.type
    })
    }
    if(filter.brend != ""){
        towars.innerHTML = ""
    massive_filtrat = massive_filtrat.filter(towar=>{
        return towar.brend == filter.brend
    })
    }
    if(filter.size != ""){
        towars.innerHTML = ""
    massive_filtrat = massive_filtrat.filter(towar=>{
        return towar.size == filter.size
    })
    }
    if(filter.minprice != ""){
        towars.innerHTML = ""
    massive_filtrat = massive_filtrat.filter(towar=>{
        return towar.price >= filter.minprice
    })
    }
    if(filter.maxprice != ""){
        towars.innerHTML = ""
    massive_filtrat = massive_filtrat.filter(towar=>{
        return towar.price <= filter.maxprice
    })
    }
   
    
    massive_filtrat.forEach(towar=>{
        drawForBlock(towar)

 })
 }else{
    
    towars.innerHTML = ""

    massive.forEach(towar=>{
        drawForBlock(towar)

 })
 }
})

}
giga_vuvid()


function save_Filter(){
    let filter = {
        name: document.getElementById('towar_name_filter').value,
        type: document.getElementById('towar_type_filter').value,
        minprice:Number(document.getElementById('slider-1').value) ,
        maxprice: Number(document.getElementById('slider-2').value),
        brend:document.getElementById('towar_brend_filter').value,
        size:document.getElementById('towar_size_filter').value
    }
    localStorage.setItem('filter', JSON.stringify(filter))
    giga_vuvid()

}
function clear_Filter(){
    localStorage.removeItem('filter')
    /*document.getElementById('towar_name_filter').value ='';
    document.getElementById('towar_type_filter').value ='';
    document.getElementById('slider-1').value  ='';
    document.getElementById('slider-2').value ='';
    document.getElementById('towar_brend_filter').value ='';
    document.getElementById('towar_size_filter').value ='';*/
    window.location.reload()
}



























































































/*

            buttons_block.appendChild(red_block);
            buttons_block.appendChild(price_block);
            buttons_block.appendChild(koshik_block);


            golovniy_block.appendChild(img_block);
            golovniy_block.appendChild(name_block);
            golovniy_block.appendChild(opis_block);
            golovniy_block.appendChild(mass_ccal_block);
            golovniy_block.appendChild(buttons_block);


            all_tovars.appendChild(golovniy_block);
*/ 