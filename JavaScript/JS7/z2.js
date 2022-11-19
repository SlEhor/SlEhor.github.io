/*let numbers = [3,2,5];
numbers.push(10);

console.log(numbers.indexOf())*/
alert(`Вітаю це гра "Вгадай числа" вам потрібно вгадати число, яке загадав ваш друг`);
let pablo = [];
for(i=1;i<4;i++){
  pablo.push(Number(prompt(`Введіть ${i} число `)))
}
alert(`Черга другого гравця`)



let gavs = pablo.slice();
for(i=0;i<5;i++){

let yr = Number(prompt(`Вгадайте число від 1 до 10`));
    if(pablo.indexOf(yr) == -1){
        pablo.push(yr)
    }else{
            pablo[pablo.indexOf(yr)] = "*";
    }
}           
if(pablo.length <= 5){
alert(`Вітаю, ви вгадали числа ${gavs}`);

}
console.log(gavs)
console.log(pablo)
