// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(array, event) {
    let thankYouCards = []
    for (let i = 0; i < array.length; i++) {
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return thankYouCards
}


function countDown(int) {
    let i = 0
    while (i < int ) {
        console.log(int)
        int -=1
    }
    console.log(int)
}

