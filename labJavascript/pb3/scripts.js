
const imagesURLs=["html.jpg","css.jpg","js.jpg","rails.jpg","python.jpg","node.jpg","html.jpg","css.jpg","js.jpg","rails.jpg","python.jpg","node.jpg"];
var solved=[];
var lastFlipped=null;
var isPause=false;

function initGame(rows=3,cols=4,images=imagesURLs) {
    var mainBoard=document.getElementById("board");
    solved=[];
    lastFlipped=null;
    isPause=false;
    while(mainBoard.firstChild)//reset the board
        mainBoard.removeChild(mainBoard.firstChild);
    const cards=[];
    const shuffleURL=shuffleCards(images);
   // const shuffleURL=images;
    for(i=1;i<=rows;i++){
        var rowDiv=document.createElement("div");
        for(j=1;j<=cols;j++){
            var backImg=document.createElement("img");
            backImg.setAttribute("src","backimg.jpg");
            backImg.setAttribute("alt","photo");

            backImg.className+=" card";
            rowDiv.appendChild(backImg);
            cards.push(backImg);
            backImg.addEventListener("click",function () {
                colNr=[].indexOf.call(this.parentNode.children,this);
                rowNr=[].indexOf.call(this.parentNode.parentNode.children,this.parentNode);
                flipCard(this,shuffleURL[cols*(rowNr)+colNr])
            });
        }

        document.getElementById("board").appendChild(rowDiv);
    }
    return [cards,shuffleURL];
}

function shuffleCards(imagesURLs){
    const cardsURL=imagesURLs;
    for(var i=1;i<=cardsURL.length/2;i++){
        const randint=getRandomInt(0,11);
        [cardsURL[i],cardsURL[randint]]=[cardsURL[randint],cardsURL[i]];
    }
    return cardsURL;
}

function flipCard(card, imageURL) {
    if(isPause===true || lastFlipped===card || solved.indexOf(card.getAttribute("src"))!==-1)
        return ;
    if (lastFlipped == null) {
        console.log(lastFlipped,card,'\n');
        lastFlipped = card;
        card.classList.toggle("flip");
        card.setAttribute("src", imageURL);
    } else {
        card.classList.toggle("flip");
        card.setAttribute("src", imageURL);
        if (card.getAttribute("src") === lastFlipped.getAttribute("src")) {
            console.log(lastFlipped,card,'\n');
            solved.push(lastFlipped.getAttribute("src"));
            setTimeout(function () {
                if(solved.length===imagesURLs.length/2)
                    alert("GG WP");
            },500);
            lastFlipped=null;
        }
        else {
            console.log(lastFlipped,card,'\n');
            isPause=true;
            setTimeout(function () {
                isPause=false;
                lastFlipped.setAttribute("src", "backimg.jpg");
                lastFlipped.classList.toggle("flip");
                lastFlipped = null;
                card.classList.toggle("flip");
                card.setAttribute("src", "backimg.jpg");
            },750);



        }
    }


}

function firstFlipAll() {
    var param=initGame();
    var cards=param[0];
    var urls=param[1];
    for(var i =0;i<urls.length;i++){
        cards[i].classList.toggle("flip");
        cards[i].setAttribute("src",urls[i]);
    }
    setTimeout(function () {
        for(var i =0;i<urls.length;i++){
            cards[i].classList.toggle("flip");
            cards[i].setAttribute("src","backimg.jpg");
        }
    },1000);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


