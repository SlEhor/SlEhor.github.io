let users = [
	"Андрусишин Олег",
	"Балицький Олексій",
	"Барановський Ігор",
	"Бей Тетяна",
	"Білас Всеволод",
	"Білоус Андрій",
	"Бордун Галина",
	"Буба Євген",
	"Вантух Володимир",
	"Васьків Роман",
	"Вервега Тарас",
	"Візняк Юрій",
	"Гагалюк Богдан",
	"Ганущин Олександр",
	"Гичка Михайло",
	"Гірняк Володимир",
	"Голуб Юрій",
	"Грабінський Ігор",
	"Грицик Ольга",
	"Гудима Юрій",
	"Дворянин Парасковія",
	"Дейнека Анатолій",
	"Демчина Роман",
	"Дзюдзь Михайло"
];
let styl = document.getElementById('pon')

let badabym = '';
let chek = '';
let imya = prompt('Введіть імя користувача якому потрібно відправити лист -')
let kor = document.getElementById('nop')
let korzn = `Знайдено користувачів з імям ${imya} - ${}`;
for(i=0;i<users.length;i++){
    if(users[i].includes(imya)){
        chek= 'checked'
}else{
    chek= ''

}
    if(i % 2 == 1){
        badabym +=  `<tr class="one nopon">
        <td>${i+1}</td>
        <td>${users[i]}</td>
        <td align="center"><input type="checkbox" ${chek}></td>
    </tr>`
    
    }else{
        badabym +=  `<tr class="one pon">
        <td>${i+1}</td>
        <td>${users[i]}</td>
        <td align="center"><input type="checkbox" ${chek}></td>
    </tr>`
    
    }
  

}
pon.innerHTML = badabym;
kor.innerHTML = korzn;