const cards = [
{
	rank:"Queen",
	suit:"Hearts",
	cardImage:"images/queen-of-hearts.png",
},
{
	rank:"Queen",
	suit:"Diamonds",
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank:"King",
	suit:"Hearts",
	cardImage:"images/king-of-hearts.png",
},
{
	rank:"King",
	suit:"Diamonds",
	cardImage:"images/king-of-diamonds.png",
},
{	rank:"Queen",
	suit:"Hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"Queen",
	suit:"Diamonds",
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank:"King",
	suit:"Hearts",
	cardImage:"images/king-of-hearts.png",
},
{
	rank:"King",
	suit:"Diamonds",
	cardImage:"images/king-of-diamonds.png",
},
];
let cardsInPlay = [];

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
};

function flipCard() {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped" + " " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length %2 === 0) {
		checkForMatch();
	}

};
//global variable for points
var points = 1

function checkForMatch() {
		if (cardsInPlay[cardsInPlay.length-1] === cardsInPlay[cardsInPlay.length-2]) {
			alert("You found a match of" + " " + cardsInPlay[cardsInPlay.length-1] + "s!" + '\n' + "You have" + " " + points++ + " " + "matches");
		} else {
			alert("Sorry, try again.");
		} 
//think about pop here
};

function gameRestart() {
	for (var i = 0; i < cards.length; i++) {
		var restart = document.getElementById('game-board');
		var children = restart.childNodes;
		restart.removeChild(restart.firstChild);
		points = 1;

} createBoard();
};

	restartButton = document.getElementById("restartButton");
	restartButton.addEventListener("click", gameRestart);
	createBoard();
	

