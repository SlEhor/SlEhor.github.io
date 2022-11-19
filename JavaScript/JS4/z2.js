 let kol = prompt(`Який колір на світлофорі?`);
 if(kol == `green` || kol == `зелений`){
	 alert(`Можна рухатись`)
 }else if(kol == `yellow` || kol == `жовтий`){
	 alert(`Приготуйтесь`)
 }else if(kol == `red` || kol == `червоний`){
	alert(`Стоп!`)
 }else{
	 alert(`Введіть правильно`)
 }