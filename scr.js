console.log('sssssssapper');
console.log('kak');

function createTable(level) {
    let table = document.createElement('table');
    if (level === 1) {
        let countBomb = 15;
        let mas = randomBomb(countBomb);
        console.log(mas);
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let q = 0; q < 10; q++) {
                let th = document.createElement('th');
                th.id = `th_${i}_${q}`;
                if (mas.includes(th.id)) {
                    th.className = 'bomb';
                }
                th.style.background = '#7A7A7A';
                th.width = '20px';
                th.height = '20px';
                tr.append(th);
            }
        }
    }
    if (level === 2) {
        let countBomb = 25;
        let mas = randomBomb(countBomb);
        console.log(mas);
        for (let i = 0; i < 20; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let q = 0; q < 20; q++) {
                let th = document.createElement('th');
                th.id = `th_${i}_${q}`;
                if (mas.includes(th.id)) {
                    th.className = 'bomb';
                }
                th.style.background = '#7A7A7A';
                th.width = '20px';
                th.height = '20px';
                tr.append(th);
            }
        }
    }


    function randomBomb(countBomb) {
        let mas = [];
        for (let i = 0; i < countBomb; i++)
            mas[i] = 'th_' + (Math.random() * 10).toFixed() + '_' + (Math.random() * 10).toFixed();
        return mas;
    }

    let smileImg = smile();
    table.onmousedown = function (event) {
        smileImg.src = './img/wow-icon.png';
    };
    table.onmouseup = function () {
        smileImg.src = './img/smile-icon.png';
    };
    table.onclick = function (event) {
        let cell = document.getElementById(event.target.id);
        if (cell.className === 'bomb') {
            smileImg.src = './img/tear-icon.png';
            table.onclick = null;
            table.style.opacity = '0.7';
            gameOver();
            cell.style.background = 'red';
        } else {
            let count = 0;
            let first = cell.id.slice(3, 4);
            let second = cell.id.slice(5, 6);
            console.log(first, second);
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (document.getElementById(`th_${+first + i}_${+second + j}`)) {
                        console.log(`th_${+first + i}_${+second + j}`);
                        let neighbor = document.getElementById(`th_${+first + i}_${+second + j}`);
                        if (neighbor.className === 'bomb')
                            count++;
                    }
                }
            }
            // if (count === 0) {
            // debugger;
            //     for (let i = -1; i < 2; i++) {
            //         for (let j = -1; j < 2; j++) {
            //             if (document.getElementById(`th_${+first + i}_${+second + j}`)) {
            //                 let neighbor = document.getElementById(`th_${+first + i}_${+second + j}`);
            //                 neighbor.click();
            //             }
            //         }
            //     }
            // }
            console.log(cell);
            cell.innerText = count;
            cell.style.background = 'white';
        }
    };
    table.oncontextmenu = function (event) {
        let cell = document.getElementById(event.target.id);
        cell.style.background = 'yellow';
        return false;
    };


    table.length = '100px';
    table.height = '100px';
    document.body.append(table);
    console.log('done');
}

function gameOver() {
    let banner = document.createElement('div');
    banner.innerText = 'Game Over';
    banner.className = "gameOver";
    document.body.append(banner);
}

function smile(event) {
    let smileImg = new Image();
    smileImg.src = './img/smile-icon.png';
    smileImg.width = 30;
    smileImg.height = 30;
    smileImg.style.margin = '0 auto';
    document.body.append(smileImg);
    return smileImg;
}

createTable(1);