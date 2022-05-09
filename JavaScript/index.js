const replyOneMain = document.querySelector(".reply-one .main");
const replyOneReplys = document.querySelector(".reply-one .replys");
const replyTwoMain = document.querySelector(".reply-two .main");
const replyTwoReplys = document.querySelector(".reply-two .replys");

// ? Fetching the data.

fetch("../data.json")
  .then((data) => data.json())
  .then((info) => {
    // ! Reply One stuff START.

    // ? The div container for the score stuff and the head div.
    let mainCont = document.createElement("div");
    mainCont.className = "score-head-cont";

    // ? The div of the score stuff.
    let scoreDiv = document.createElement("div");
    scoreDiv.className = "score-div";

    // ? Plus image
    let plusImage = document.createElement("img");
    plusImage.src = "../images/icon-plus.svg";
    plusImage.className = "plus-image";

    // ? The score number between the plus and minus images.
    let number = document.createElement("p");
    number.textContent = info.comments[0].score;
    number.className = "score-number";

    // ? Minus image
    let minusImage = document.createElement("img");
    minusImage.src = "../images/icon-minus.svg";
    minusImage.className = "minus-image";

    // ? Adding the elements to the div.
    scoreDiv.appendChild(plusImage);
    scoreDiv.appendChild(number);
    scoreDiv.appendChild(minusImage);

    // ? Adding the div to the mainCont div.
    mainCont.appendChild(scoreDiv);

    // ? Creating the div for the header of the reply.
    let replyHeadDiv = document.createElement("div");
    replyHeadDiv.className = "reply-head-div";

    // ? The picture of the user
    let userImage = document.createElement("img");
    userImage.src = info.comments[0].user.image.png;
    userImage.className = "user-icon";

    // ? Added the name of the user.
    let userOneName = document.createElement("p");
    userOneName.textContent = info.comments[0].username;
    userOneName.className = "user-one-name";

    // ? Added the last activity timing.
    let userOneLastAct = document.createElement("span");
    userOneLastAct.textContent = info.comments[0].createdAt;
    userOneLastAct.className = "user-one-publish";

    // ? Added the reply icon.
    let replyIcon = document.createElement("img");
    replyIcon.src = "../images/icon-reply.svg";

    // ? Pushing elements inside the replyHeadDiv.
    replyHeadDiv.appendChild(userImage);
    replyHeadDiv.appendChild(userOneName);
    replyHeadDiv.appendChild(userOneLastAct);
    replyHeadDiv.appendChild(replyIcon);

    // ? Adding the div to the mainCont div.
    mainCont.appendChild(replyHeadDiv);

    // ? Adding the mainCont to the mainReply div.
    replyOneMain.appendChild(mainCont);

    // ? Creating the comment paragraph element.
    let commentP = document.createElement("p");
    commentP.className = "comment-text";
    commentP.textContent = info.comments[0].content;

    // ? Added the comment paragraph to the replyOneMain.
    replyOneMain.appendChild(commentP);

    // ! Reply One stuff END.

    // ! Reply two stuff START.

    
  });
