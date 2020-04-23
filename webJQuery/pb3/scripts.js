
var solved=0;
var lastFlipped=null;
var isPause=false;
var typeOfGame="";
const imagesURLs=["html.jpg","css.jpg","js.jpg","rails.jpg","python.jpg","node.jpg","html.jpg","css.jpg","js.jpg","rails.jpg","python.jpg","node.jpg"];
const numbersURLs=["1","2","3","4","5","6","1","2","3","4","5","6"];
var solvedUrls=[];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function shuffleCards(imagesURLs){
    const cardsURL=imagesURLs;
    for(var i=1;i<=cardsURL.length/2;i++){
        const randint=getRandomInt(0,11);
        [cardsURL[i],cardsURL[randint]]=[cardsURL[randint],cardsURL[i]];
    }
    return cardsURL;
}





function initGame(rows=3,cols=4,images=imagesURLs) {
    var mainBoard=$("#board");
    solved=[];
    lastFlipped=null;
    isPause=false;
    while(mainBoard.firstChild)//reset the board
        mainBoard.removeChild(mainBoard.firstChild);
    const shuffleURL=shuffleCards(images);
    for(i=1;i<=rows;i++){
        mainBoard.append("<div></div>");
        for(j=1;j<=cols;j++){
            if(typeOfGame==="image")
                $("#board div:last-child").append("<img src='"+"backimg.jpg"+"' alt='NONE'/>");
            else
                $("#board div:last-child").append("<strong>X</strong>");

        }

    }
    if(typeOfGame==="image")
        idk="img";
    else
        idk="strong";
    $("#board div "+idk).addClass("card");
    $("#board div "+idk).each(function (index) {
        $(this).bind("click",function () {
            flipCard($(this),shuffleURL[index],typeOfGame);
        });

    });

    return shuffleURL
}

function flipAll(initdata) {
    var urls=initGame(3,4,initdata);
    var idk="";
    if(typeOfGame==="image")
        idk="img";
    else
        idk="strong";
    isPause=true;
    for(var i =0;i<urls.length;i++){
        var el=$("#board div "+idk).eq(i);
        toggleClassForACard(el,urls[i],typeOfGame,"up");
    }
    setTimeout(function () {
        isPause=false;
        for(var i =0;i<urls.length;i++){
            var el=$("#board div "+idk).eq(i);
            toggleClassForACard(el,null,typeOfGame,"down");


        }
    },1000);
}

function flipCard(card, url,cardType) {
    console.log("ENTERED");
    if(isPause===true || solvedUrls.includes(url))
        return;
    if (lastFlipped == null) {
        lastFlipped = card;
        toggleClassForACard(card,url,cardType,"up");
    } else {
        if(lastFlipped.get(0)===card.get(0)) {
            return;
        }
        toggleClassForACard(card,url,cardType,"up");
        if (equalCards(card,lastFlipped,cardType)) {

            solved=Number(solved)+1;
            solvedUrls.push(url);
            setTimeout(function () {
                if(solved===imagesURLs.length/2)
                {
                    isPause=true;
                    alert("GG WP");
                }
            },500);
            lastFlipped=null;
        }
        else {
            isPause=true;
            setTimeout(function () {
                isPause=false;
                toggleClassForACard(lastFlipped,null,cardType,"down");
                lastFlipped = null;
                toggleClassForACard(card,null,cardType,"down");
            },750);



        }
    }


}

function equalCards(card1,card2,cardType) {
    if(cardType==="image"){
        return card1.attr("src")===card2.attr("src");
    }
    else{
        return card1.text()===card2.text();
    }

}

function toggleClassForACard(card,value,cardType,status){
    console.log(card,value,cardType,status);
    card.toggleClass("flip");
    if(cardType==="image"){
        if(status==="down")
            card.attr("src","backimg.jpg");
        else
            card.attr("src",value);
    }
    else{
        if(status==="down")
            card.text("X");
        else
            card.text(value);
    }

}


$(function() {
    typeOfGame="number";        //set this to change game type
    if(typeOfGame==="number")
        flipAll(numbersURLs);
    else
        flipAll(imagesURLs);
});
