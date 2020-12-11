const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.remove("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    const playMatch = () =>  {
        const options = document.querySelectorAll('.options button');
        const playerHand =  document.querySelector('.player-hand');
        const computerHand =  document.querySelector('.computer-hand');
        const hands = document.querySelectorAll(".hands img");

         hands.forEach(hand => {
             hand.addEventListener("animationend", function() {
                this.style.animation = '';
             });
         });

        const computerOptions = ["rock","paper","scissor"];

        options.forEach(option => {
            option.addEventListener("click",function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice =  computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent , computerChoice);
                 
                playerHand.src = `./assets/${option.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                console.log(playerHand);
                console.log(computerHand);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

                
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector(".winner");

        if (pScore == 10) {
            winner.textContent = "Player won"
            pScore = 0;
            cScore = 0;
            match.classList.remove("fadeIn");
            match.classList.add("fadeOut");
            introScreen.classList.remove("fadeOut");


        }
        if (cScore == 10) {
            winner.textContent = "Computer won"
            pScore = 0;
            cScore = 0;
            match.classList.remove("fadeIn");
            match.classList.add("fadeOut");
            introScreen.classList.remove("fadeOut");

        }

        if(playerChoice ===  computerChoice){
            winner.textContent = "It's a tie";
            return;
        } 
        if(playerChoice === "rock"){
            if(computerChoice === "scissor"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();

                return;
            }

        }
        if(playerChoice === "scissor"){
            if(computerChoice === "paper"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }

        }
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }

        }

    };
    startGame();
    playMatch();
};
game();
