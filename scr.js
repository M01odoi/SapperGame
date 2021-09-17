function createTable(level) {
    let table = document.createElement('table');
    countCell = level*10;
    let countBomb = level*15;
    if (level === 1) {
        let mas = randomBomb(countBomb);
        console.log(mas);
        for (let i = 0; i < countCell; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let q = 0; q < countCell; q++) {
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
        let mas = randomBomb(countBomb);
        console.log(mas);
        for (let i = 0; i < countCell; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let q = 0; q < countCell; q++) {
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
            mas[i] = 'th_' + (Math.random() * countCell).toFixed() + '_' + (Math.random() * countCell).toFixed();
        return mas;
    }

    let smileImg = smile(countBomb);
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
            let firstSecond = cell.id.match(/\d{1,}/g);
            let first = firstSecond[0];
            let second = firstSecond[1];
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (document.getElementById(`th_${+first + i}_${+second + j}`)) {
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

function smile(countBomb) {
    let smile = document.createElement('div');
    smile.className = 'smile';
    smile.id = 'smile';

    let showCountBomb = document.createElement('a');
    showCountBomb.href = '';
    showCountBomb.className = 'countBomb';
    showCountBomb.innerText = countBomb;


    let smileImg = new Image();
    smileImg.src = './img/smile-icon.png';
    smileImg.width = 30;
    smileImg.height = 30;
    smile.append(showCountBomb);

    let time = document.createElement('div');
    time ='00:00';

    smile.append(smileImg);
    document.body.append(smile);
    return smileImg;
}

createTable(2);