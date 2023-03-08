    let result;
    let button = document.getElementById(`button`);//объявление
button.addEventListener(`click`, function(){//функция
    let num1 = Number(document.getElementById(`num1`).value);
    if(num1.toString().length == 4){
    let a = Math.floor(num1 / 1000);//переменные
    let a1000 = a * 1000;
    let b100 = num1 - a1000;
    let b = Math.floor(b100 / 100);
    let b1000 = b * 100;
    let figa =  b100 - b1000;
    let c = Math.floor(figa / 10);
    let d = figa % 10;
        result = a + b + c +d;//результат
        resultP = (d * 1000) + (c * 100) + (b * 10) + a;
            document.getElementById("result").innerHTML = `сумма цифр: ` + result;
            document.getElementById("resultP").innerHTML = `число наоборот: ` + resultP;//вывод
} else {
    document.getElementById("result").innerHTML = `вы ввели некорректное значение`;
    document.getElementById("resultP").innerHTML = ``;
}
});