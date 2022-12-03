let slovo = prompt("Гравець 1.Загадайте слово");
let numbers = Number(prompt("Скільки буде підказок?"));
let pid = [];
let bd = false;
let sproba = 1;
let cp = 1;
for(i=0;i<numbers;i++){ 
    pid.push(prompt(`Напишіть підказку номер ${i+1}`))
}
alert(`Гравець 2.${pid[0]}. В слові ${slovo.length} літери`)

while(bd == false){



if(prompt(`Спробуй відгадати слово`) == slovo){
bd = true;
break;
}
if(sproba < numbers){
if(confirm("Чи потрібна вам підказка?") == true){
    alert(pid[sproba])
    sproba++;
}
}
cp++;
}
alert(`Вітаю ти вгадав слово - ${slovo}  використавши ${cp} спроб та ${sproba} підказок`);