//Все задания нужно выполнять на js, можно использовать es6, можно es5

let div = document.querySelector('.div');
let value = document.querySelectorAll('.value');
let text = document.querySelector('.text');
let btn = document.querySelector('.btn')

let banknotes = [5000, 1000, 500, 100, 50];
function getMoney(amount) {
    //Твой код
    //Пояснение: заходит сумма от пользователя, функция должна вернуть объект, 
    //который имеет вид разбитой суммы по банкнотам из массива banknotes. Если выдать необходимую сумму не получиться вернуть "warn"
    //amount = 11650
    //=> { 5000: 2, 1000: 1, 500: 1, 100: 1, 50: 1 }
    //amount = 11520
    //=> 'warn'
    let obj = {
        5000: 0,
        1000: 0,
        500: 0,
        100: 0,
        50: 0
    }

    let a = 0;
    if (amount % 50 == 0) {
        for (let i = 0; i <= banknotes.length - 1; i++) {
            if (amount / banknotes[i]) {
                a = amount / banknotes[i]
                obj[banknotes[i]] = Math.floor(a);
                amount = amount - banknotes[i] * Math.floor(a);
            }
        }

        return obj;
    } else return 'warn'

}
function setMoneyResultInNode(getMoneyResult) {
    //Функция Принимает в себя результат выполнения функции getMoney, после чего выводит в DOM полученные данные.
    //Если значение getMoney = 'warn', вывести на экран только его
    //Можно использовать заготовленный html выше, можно менять ее как хочешь, можно вообще создавать свой из под js,
    // html выше дан для понимания того как должен выглядеть вывод;
    if (getMoneyResult == 'warn') {
        return div.innerHTML = getMoneyResult
    } else {
        for (let i = 0; i <= value.length - 1; i++) {
            value[i].innerHTML = getMoneyResult[banknotes[i]]
        }


        return value.innerHTML = getMoneyResult;
    }
}

btn.addEventListener('click',() => {
    setMoneyResultInNode(getMoney(text.value));
})

//console.log(setMoneyResultInNode(getMoney(11650)))