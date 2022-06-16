let rock = rockBtn;
let paper = paperBtn;
let scissors = scissorsBtn;
let player;
let computer;
let option = [rock, paper, scissors];
let playerWin = 0;
let computerWin = 0;
$('#redPoint').html('Red score: ' + playerWin);
$('#bluePoint').html('Blue score: ' + computerWin);
$('#victoryBox').hide();
rockBtn.addEventListener('click', () => {
    player = rock;
    playerCase.innerHTML = '<img id="rockBtn" src="assets/img/tortank.png" alt="image pixel-art de tortank">'
    tortankMp3.play()
})

paperBtn.addEventListener('click', () => {
    player = paper;
    playerCase.innerHTML = '<img id="paperBtn" src="assets/img/florizarre.png" alt="image pixel-art de florizarre">'
    florizarreMp3.play()
})

scissorsBtn.addEventListener('click', () => {
    player = scissors;
    playerCase.innerHTML = '<img id="scissorsBtn" src="assets/img/dracaufeu.png" alt="image pixel-art de dracaufeu">'
    dracaufeuMp3.play()
})

playBtn.addEventListener('click', () => {
    if (playerWin < 5 && computerWin < 5) {
        computer = option[Math.floor(Math.random() * option.length)];
        fhtSound.play()
        if (computer == scissors) {
            computerCase.innerHTML = '<img id="scissorsBtn" src="assets/img/dracaufeu.png" alt="image pixel-art de dracaufeu">'
        }

        else if (computer == rock) {
            computerCase.innerHTML = '<img id="rockBtn" src="assets/img/tortank.png" alt="image pixel-art de tortank">'
        }

        else {
            computerCase.innerHTML = '<img id="paperBtn" src="assets/img/florizarre.png" alt="image pixel-art de florizarre">'
        }

        if (player === computer) {
            $('h1').html('égalité');
        }

        else if (player == rock) {
            if (computer == paper) {
                $('h1').html('Blue wins');
                computerWin++
            } else {
                $('h1').html('Red wins');
                playerWin++
            }

        }

        else if (player == paper) {
            if (computer == scissors) {
                $('h1').html('Blue wins');
                computerWin++

            } else {
                $('h1').html('Red wins');
                playerWin++

            }
        }

        else if (player == scissors) {
            if (computer == rock) {
                $('h1').html('Blue wins');
                computerWin++

            } else {
                $('h1').html('Red wins');
                playerWin++

            }
        }
        $('#redPoint').html('Red score: ' + playerWin);
        $('#bluePoint').html('Blue score: ' + computerWin);
    }
    else {
        $('#victoryBox').show();
        $('#list').hide();
        $('#playBtn').hide();
        $('#dialogue').hide();
        redBox.style.position = 'absolute'
        redBox.style.top = '15em'
        redBox.style.left = '15em'
        blueBox.style.position = 'absolute'
        blueBox.style.top = '15em'
        blueBox.style.right = '15em'
        fightZone.style.marginTop = '15em'
        fightZone.style.justifyContent = 'center'
        if (playerWin == 5) {
            textWin.innerHTML = 'The winner is Red !!'
            $('#versus').hide();
            $('#computerCase').hide();
            $('#blue').hide();
            playerCase.style.marginLeft = '6em'
            playerCase.style.border = 'none'
            red.style.height = '25em'
        }
        else {
            textWin.innerHTML = 'The winner is Blue !!'
            $('#versus').hide();
            $('#playerCase').hide();
            $('#red').hide();
            computerCase.style.marginRight = '6em'
            computerCase.style.border = 'none'
            blue.style.height = '25em'
        }

        fhtSound.pause()
        victorySong.play()
    }
})

resetBtn.addEventListener('click', () => {
    window.location.reload()
})