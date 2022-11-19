/*let names = [];
for(i=0;i<5;i++){
	names[i] = prompt(`Введіть ім'я`)
}
console.log(names)
let x = prompt(`Введіть число`)
for(i=1;i<11;i++){
console.log(`${x} * ${i} = ${x * i}`)
}


for(i=1;i<16;i++){
console.log(`${i} ^ 2 = ${i ** 2}`)
}*/
let x = prompt(`Введіть число`)
let suma = 0;
for(i=1;i<=x;i++){
	suma = suma + i;
}console.log(`Сума чисел від 1 до ${x} рівна - ${suma}`)