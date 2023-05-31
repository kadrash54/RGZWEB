function table1() {
    let table = document.getElementById('table');


    let date = ['30.05.2023','29.05.2023','26.05.2023','25.05.2023','24.05.2023','23.05.2023','22.05.2023','19.05.2023','18.05.2023','17.05.2023','16.05.2023','15.05.2023','12.05.2023','11.05.2023','10.05.2023','08.05.2023','05.05.2023','04.05.2023','03.05.2023','02.05.2023', '31.05.2023'];
                
    let closePrice = [147.15, 146.25, 146.00,145.75,146.15,144.00,143.95,145.00,145.85,150.75,154.95,150.40,148.40,148.70,142.30,137.65,136.25,135.85,137.50,134.15,134.10];
    

    let row1 = document.createElement('tr');
    let header1 = document.createElement('td');
    header1.innerHTML = 'Дата';
    header1.style.textAlign = 'left';
    header1.style.fontSize = '1vw';
    header1.style.color = 'black';
    row1.appendChild(header1);

    for (let i = date.length - 1; i > -1; i--) {

        let cell1 = document.createElement('td');
        cell1.innerHTML = date[i];
        cell1.style.textAlign = 'center';
        cell1.style.fontSize = '0.8vw';
        row1.appendChild(cell1);
        table.appendChild(row1);
    }

    let row2 = document.createElement('tr');
    let header2 = document.createElement('td');
    header2.innerHTML = 'Цена';
    header2.style.textAlign = 'left';
    header2.style.fontSize = '1vw';
    header2.style.color = 'black';
    row2.appendChild(header2);


    for (let i = closePrice.length - 1; i > -1; i--) {
        let cell2 = document.createElement('td');
        cell2.innerHTML = closePrice[i];
        cell2.style.textAlign = 'center';
        cell2.style.fontSize = '0.8vw';
        row2.appendChild(cell2);
        table.appendChild(row2);
    }
  
    let priceSum = 0;
    for (let i = 0; i < closePrice.length; i++) {
        priceSum = priceSum + closePrice[i];
    }

    let stockAverage = priceSum / closePrice.length;
    let squared_diff_sum = 0;
    for (i = 0 ; i < closePrice.length; i++){
        squared_diff_sum = squared_diff_sum + (closePrice[i] - stockAverage) ** 2;
    }
    let st_deviation = (Math.sqrt(squared_diff_sum / closePrice.length)).toFixed(5);
    alert1 = document.getElementById('average');
    alert1.innerHTML = 'Среднеквадратическое отклонение: ' + st_deviation;

    let minValue = Math.min.apply(0, closePrice);
    alert2 = document.getElementById('minValue');
    alert2.innerHTML = 'Минимальное значение: ' + minValue;

    let maxValue = Math.max.apply(0, closePrice);
    alert3 = document.getElementById('maxValue');
    alert3.innerHTML = 'Максимальное значение: ' + maxValue;
    }

    table1()