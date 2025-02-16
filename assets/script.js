const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 8

// Linking text
playerLivesCount.textContent = playerLives;

// Generate the cards (array)
const getData = () => [
    { imgSrc: "assets/images/audioslave.jpeg", name: "audioslave" },
    { imgSrc: "assets/images/kids-see-ghosts.jpeg", name: "kids see ghosts" },
    { imgSrc: "assets/images/limp-bizkit.jpeg", name: "limp bizkit" },
    { imgSrc: "assets/images/outkast.jpeg", name: "outkast" },
    { imgSrc: "assets/images/rage.jpeg", name: "rage against the machine" },
    { imgSrc: "assets/images/the-cure.jpeg", name: "the cure" },
    { imgSrc: "assets/images/wu-tang.jpeg", name: "wu tang" },
    { imgSrc: "assets/images/linkin-park.jpeg", name: "linkin park" },
    { imgSrc: "assets/images/audioslave.jpeg", name: "audioslave" },
    { imgSrc: "assets/images/kids-see-ghosts.jpeg", name: "kids see ghosts" },
    { imgSrc: "assets/images/limp-bizkit.jpeg", name: "limp bizkit" },
    { imgSrc: "assets/images/outkast.jpeg", name: "outkast" },
    { imgSrc: "assets/images/rage.jpeg", name: "rage against the machine" },
    { imgSrc: "assets/images/the-cure.jpeg", name: "the cure" },
    { imgSrc: "assets/images/wu-tang.jpeg", name: "wu tang" },
    { imgSrc: "assets/images/linkin-park.jpeg", name: "linkin park" },
    
];

// Randomising function
const randomize = () => {
    const cardData = getData();
    
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    

};

// Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
    //Generate HTML
    
    cardData.forEach((item, index) => {
            const card = document.createElement("div");
            const face = document.createElement("img");
            const back = document.createElement("div");
            card.classList = "card";
            face.classList = "face";
            back.classList = "back";
            //attach info to cards
            face.src = item.imgSrc;
            card.setAttribute("name", item.name);

            //attach cards to the section const
            section.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);

            card.addEventListener("click", (e) => {
                card.classList.toggle("toggleCard");
                checkCards(e);
            })


        });
    
    

};
// check the cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped")
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    // if function
    if(flippedCards.length === 2) {
        if(
            flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name")
        ) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            console.log("wrong");
            flippedCards.forEach( card => {
                card.classList.remove("flipped");
                
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0){
                restart("Whoops, try again! 😪");
            }
        }
    }
    /// Check if we won
    if (toggleCard.length === 16) {
        restart("You Won!!!!! 🤠");
    }


}

//Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
    },1000)

    });
    playerLives = 8;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
    
}
cardGenerator();


