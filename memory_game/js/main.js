const cards = [
{
	rank:"Queen",
	suit:"Hearts",
	cardImage:"images/queen-of-hearts.png"
,
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
const cardsInPlay = [];
function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match of" + " " + cardsInPlay[1] + "s!");
		} else {
			console.log("Sorry, try again.");
		}
}
function flipCard(cardId) {
	console.log("User flipped" + " " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
}
flipCard(0);
flipCard(2);