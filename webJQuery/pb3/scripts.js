
var solved=[];
var lastFlipped=null;
var isPause=false;





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}




var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var board = "#board";



function shuffleCards(imagesURLs){
    const cardsURL=imagesURLs;
    for(var i=1;i<=cardsURL.length/2;i++){
        const randint=getRandomInt(0,11);
        [cardsURL[i],cardsURL[randint]]=[cardsURL[randint],cardsURL[i]];
    }
    return cardsURL;
}
const imagesURLs=["html.jpg","css.jpg","js.jpg","rails.jpg","python.jpg","node.jpg","html.jpg","css.jpg","js.jpg","rails.jpg","python.jpg","node.jpg"];


$(function() {

    flipAll()
});




function initGame(rows=3,cols=4,images=imagesURLs) {
    var mainBoard=$("#board");
    solved=[];
    lastFlipped=null;
    isPause=false;
    while(mainBoard.firstChild)//reset the board
        mainBoard.removeChild(mainBoard.firstChild);
    const cards=[];
    const shuffleURL=shuffleCards(imagesURLs);
   // const shuffleURL=images;
    for(i=1;i<=rows;i++){
        mainBoard.append("<div></div>");
        for(j=1;j<=cols;j++){
            $("#board div:last-child").append("<img src='"+"backimg.jpg"+"' alt='NONE'/>");

        }

    }
    $("#board div img").addClass("card");
    $("#board div img").each(function (index) {
        $(this).bind("click",function () {
            flipCard($(this),shuffleURL[index]);
        });

    });

    return shuffleURL
}

function flipAll() {
    var urls=initGame();
    isPause=true
    for(var i =0;i<urls.length;i++){
        var el=$("#board div img").eq(i);
        el.addClass("flip");
        el.attr("src",urls[i]);
    }
    setTimeout(function () {
        isPause=false;
        for(var i =0;i<urls.length;i++){
            var el=$("#board div img").eq(i);
            el.removeClass("flip");
            el.attr("src","backimg.jpg");


        }
    },1000);
}

function flipCard(card, imageURL) {
    if(isPause===true)
        return;
    if (lastFlipped == null) {
        lastFlipped = card;
        card.toggleClass("flip");
        card.attr("src", imageURL);
    } else {

        if(lastFlipped.get(0)===card.get(0)) {

            return;
        }
        card.toggleClass("flip");
        card.attr("src", imageURL);
        if (card.attr("src") === lastFlipped.attr("src")) {
            solved.push(lastFlipped.attr("src"));
            setTimeout(function () {
                if(solved.length===imagesURLs.length/2)
                    alert("GG WP");
            },500);
            lastFlipped=null;
        }
        else {
            isPause=true;
            setTimeout(function () {
                isPause=false;
                lastFlipped.attr("src", "backimg.jpg");
                lastFlipped.toggleClass("flip");
                lastFlipped = null;
                card.toggleClass("flip");
                card.attr("src", "backimg.jpg");
            },750);



        }
    }


}
