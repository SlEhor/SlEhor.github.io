/*let numbers = [3,2,5];

numbers.push(10);
console.log(numbers)*/
let pon = 4563;
let trys = 3;
for(i=0;i<3;i++){
 let put = prompt(`Введіть пароль. Залишилось спроб ${trys}.`);
 

 if(put == pon){
 alert(`Пароль вірний`)
 break;
}
else{
 trys--;
}if(trys == 1){alert(`Підказка! Пароль починається на 45`)}

}