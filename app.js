let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const wyniki_div = document.querySelector(".wyniki");
const wynik_p = document.querySelector(".wynik > p");
const rock_div = document.getElementById("k");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("n");

function getComputerChoice() {
	const wybory = ['k', 'p', 'n'];
	const randomNumber = Math.floor(Math.random() * 3);
	return wybory[randomNumber];
}

function convertToWord(letter) {
	if (letter === "k") return "Kamień";
	if (letter === "p") return "Papier";
	return "Nożyce";
}

function win(userChoice, computerChoice) {
	const smallTyWord = "Ty".fontsize(3).sub();
	const smallKomputerWord = "Komputer".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	wynik_p.innerHTML = `Komputer wybiera ${convertToWord(computerChoice)} <br> ${convertToWord(userChoice)}${smallTyWord} wygrywa z ${convertToWord(computerChoice)}${smallKomputerWord}. Wygrana&#10071 &#129325`;
	userChoice_div.classList.add('green-glow'); 
	setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice) {
	const smallTyWord = "Ty".fontsize(3).sub();
	const smallKomputerWord = "Komputer".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	wynik_p.innerHTML = `Komputer wybiera ${convertToWord(computerChoice)} <br> ${convertToWord(userChoice)}${smallTyWord} przegrywa z ${convertToWord(computerChoice)}${smallKomputerWord}. Przegrana &#128532`;
	userChoice_div.classList.add('red-glow'); 
	setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 300);
	
}

function draw(userChoice, computerChoice) {
	const smallTyWord = "Ty".fontsize(3).sub();
	const smallKomputerWord = "Komputer".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	wynik_p.innerHTML = ` Komputer wybiera ${convertToWord(computerChoice)} <br> ${convertToWord(userChoice)}${smallTyWord} remisuje z ${convertToWord(computerChoice)}${smallKomputerWord}. Remis &#128530`;
	userChoice_div.classList.add('gray-glow'); 
	setTimeout(function() { userChoice_div.classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "kn":
		case "pk":
		case "np":
		win(userChoice, computerChoice);
		break;
		case "kp":
		case "pn":
		case "nk":
		lose(userChoice, computerChoice);
		break;
		break;
		case "kk":
		case "pp":
		case "nn":
		draw(userChoice, computerChoice);
		break;

	}
}


function main() {
rock_div.addEventListener('click', function() {
	game("k");
})

paper_div.addEventListener('click', function() {
	game("p");
})

scissors_div.addEventListener('click', function() {
	game("n");
})
}

main();
