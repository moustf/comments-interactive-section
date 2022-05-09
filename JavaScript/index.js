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

    // ? Added the div that will hold the reply icon and text.
    let replyCont = document.createElement("div");
    replyCont.className = "reply-cont";

    // ? Added the reply icon.
    let replyIcon = document.createElement("img");
    replyIcon.src = "../images/icon-reply.svg";

    // ? Adding the reply text
    let replySpan = document.createElement("span");
    replySpan.textContent = "Reply";

    // ? Pushing the elements inside the reply div.
    replyCont.appendChild(replyIcon);
    replyCont.appendChild(replySpan);

    // ? Pushing elements inside the replyHeadDiv.
    replyHeadDiv.appendChild(userImage);
    replyHeadDiv.appendChild(userOneName);
    replyHeadDiv.appendChild(userOneLastAct);
    replyHeadDiv.appendChild(replyCont);

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

    // ? The div container for the score stuff and the head div.
    let mainCont2 = document.createElement("div");
    mainCont2.className = "score-head-cont";

    // ? The div of the score stuff.
    let scoreDiv2 = document.createElement("div");
    scoreDiv2.className = "score-div";

    // ? Plus image
    let plusImage2 = document.createElement("img");
    plusImage2.src = "../images/icon-plus.svg";
    plusImage2.className = "plus-image";

    // ? The score number between the plus and minus images.
    let number2 = document.createElement("p");
    number2.textContent = info.comments[0].score;
    number2.className = "score-number";

    // ? Minus image
    let minusImage2 = document.createElement("img");
    minusImage2.src = "../images/icon-minus.svg";
    minusImage2.className = "minus-image";

    // ? Adding the elements to the div.
    scoreDiv2.appendChild(plusImage2);
    scoreDiv2.appendChild(number2);
    scoreDiv2.appendChild(minusImage2);

    // ? Adding the div to the mainCont div.
    mainCont2.appendChild(scoreDiv2);

    // ? Creating the div for the header of the reply.
    let replyHeadDiv2 = document.createElement("div");
    replyHeadDiv2.className = "reply-head-div";

    // ? The picture of the user
    let userImage2 = document.createElement("img");
    userImage2.src = info.comments[1].user.image.png;
    userImage2.className = "user-icon";

    // ? Added the name of the user.
    let userOneName2 = document.createElement("p");
    userOneName2.textContent = info.comments[1].username;
    userOneName2.className = "user-one-name";

    // ? Added the last activity timing.
    let userOneLastAct2 = document.createElement("span");
    userOneLastAct2.textContent = info.comments[1].createdAt;
    userOneLastAct2.className = "user-one-publish";

    // ? Added the div that will hold the reply icon and text.
    let replyCont2 = document.createElement("div");
    replyCont2.className = "reply-cont";

    // ? Added the reply icon.
    let replyIcon2 = document.createElement("img");
    replyIcon2.src = "../images/icon-reply.svg";

    // ? Adding the reply text
    let replySpan2 = document.createElement("span");
    replySpan2.textContent = "Reply";

    // ? Pushing the elements inside the reply div.
    replyCont2.appendChild(replyIcon2);
    replyCont2.appendChild(replySpan2);

    // ? Pushing elements inside the replyHeadDiv.
    replyHeadDiv2.appendChild(userImage2);
    replyHeadDiv2.appendChild(userOneName2);
    replyHeadDiv2.appendChild(userOneLastAct2);
    replyHeadDiv2.appendChild(replyCont2);

    // ? Adding the div to the mainCont div.
    mainCont2.appendChild(replyHeadDiv2);

    // ? Adding the mainCont to the mainReply div.
    replyTwoMain.appendChild(mainCont2);

    // ? Creating the comment paragraph element.
    let commentP2 = document.createElement("p");
    commentP2.className = "comment-text";
    commentP2.textContent = info.comments[1].content;

    // ? Added the comment paragraph to the replyOneMain.
    replyTwoMain.appendChild(commentP2);

    // ! Reply two stuff END.
  });
