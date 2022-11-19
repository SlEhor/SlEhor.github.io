/*let x = [`Ваня`, `Артем`, `Єгор`, `Дмитро`];
x[0] = `Анна`;
console.log(x.length);*/
let name = `Петро`;
let pred = `математики`;
let x = []
for(i=0;i<6;i++){
	x[i] = prompt(`Введіть свої оцінки`);
}
console.log(`Вітаю ${name}! Кількість оцінок з ${pred} рівна ${x.length}. Остання оцінка - ${x[x.length - 1]}.`);
