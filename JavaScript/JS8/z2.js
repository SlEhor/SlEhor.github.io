
let kil = 0;

let dodo = 0;

let yes = true;

while(yes == true){
kil = kil + Number(prompt(`Введіть ціну товару який ви купили`))
yes = confirm(`Чи продовжити покупки?`)
dodo++;
}
console.log(`Ви придбали ${dodo} товарів на загальну вартість - ${kil} грн`);

