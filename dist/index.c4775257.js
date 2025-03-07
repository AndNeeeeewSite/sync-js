//             1.
i = 0;
timer = setInterval(function() {
    i++;
    if (i > 5) clearInterval(timer);
    else console.log(i);
}, 1000);
//               2.
i2 = true;
animation = setInterval(function() {
    box = document.querySelector('.box');
    if (i2 == true) {
        box.style.width = '200px';
        box.style.height = '200px';
        i2 = false;
    } else {
        box.style.width = '100px';
        box.style.height = '100px';
        i2 = true;
    }
}, 1000);
//                3.
playButt = document.querySelector('.playbutt');
scoresText = document.querySelector('.scores');
clicksText = document.querySelector('.clicks');
ball = document.querySelector('.click');
gameTimerText = document.querySelector('.timer');
function randomPos(item) {
    randomW = Math.floor(Math.random() * 450);
    randomH = Math.floor(Math.random() * 450);
    item.style.marginTop = randomH + 'px';
    item.style.marginLeft = randomW + 'px';
}
randomPos(ball);
ball.addEventListener('click', function() {
    if (gameStatus == true) {
        randomPos(ball);
        clicks++;
        clicksText.textContent = 'Clicks: ' + clicks;
        score = score + 150;
        scoresText.textContent = 'Score: ' + score;
    }
});
playButt.addEventListener('click', function() {
    score = 0;
    clicks = 0;
    gameTime = 15;
    gameStatus = true;
    playButt.setAttribute("disabled", "");
    clicksText.textContent = 'Clicks: ' + clicks;
    scoresText.textContent = 'Score: ' + score;
    gameTimerText.textContent = 'Timer: ' + gameTime + 's';
    gameTimer = setInterval(function() {
        gameTime--;
        if (gameTime < 0) {
            clearInterval(gameTimer);
            gameStatus = false;
            playButt.removeAttribute("disabled");
        } else gameTimerText.textContent = 'Timer: ' + gameTime + 's';
    }, 1000);
});
//                 4.
timeInput = document.querySelector('.timeinput');
timestartButt = document.querySelector('.timestartButt');
timeOut = document.querySelector('.timeOutput');
timeStatus = false;
timestartButt.addEventListener('click', function() {
    console.log(timeStatus);
    if (timeStatus == false) {
        timeStatus = true;
        remTime = parseInt(timeInput.value);
        if (isNaN(remTime) || remTime < 1) {
            alert('Its not normal number');
            timeStatus = false;
        } else secTimer = setInterval(function() {
            remTime--;
            if (remTime < 0) {
                timeStatus = false;
                clearInterval(secTimer);
            } else timeOut.textContent = 'Remaining: ' + remTime + 's';
        }, 1000);
    } else alert('The timer hasnt ended');
});

//# sourceMappingURL=index.c4775257.js.map
