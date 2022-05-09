const replyOneMain = document.querySelector(".reply-one .main");
const replyOneReplys = document.querySelector(".reply-one .replys");
const replyTwoMain = document.querySelector(".reply-two .main");
const replyTwoReplys = document.querySelector(".reply-two .replys");

// ? Fetching the data.

fetch("../data.json")
  .then((data) => data.json())
  .then((info) => {
    // ! Comment One stuff START.

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
    userOneName.textContent = info.comments[0].user.username;
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

    // ! Comment One stuff END.

    // ! Comment two stuff START.

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
    userOneName2.textContent = info.comments[1].user.username;
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

    // ! Comment two stuff END.

    // ! Comment two reply one stuff START.

    // ? The div container for the score stuff and the head div.
    let mainCont3 = document.createElement("div");
    mainCont3.className = "score-head-cont";

    // ? The div of the score stuff.
    let scoreDiv3 = document.createElement("div");
    scoreDiv3.className = "score-div";

    // ? Plus image
    let plusImage3 = document.createElement("img");
    plusImage3.src = "../images/icon-plus.svg";
    plusImage3.className = "plus-image";

    // ? The score number between the plus and minus images.
    let number3 = document.createElement("p");
    number3.textContent = info.comments[1].replies[0].score;
    number3.className = "score-number";

    // ? Minus image
    let minusImage3 = document.createElement("img");
    minusImage3.src = "../images/icon-minus.svg";
    minusImage3.className = "minus-image";

    // ? Adding the elements to the div.
    scoreDiv3.appendChild(plusImage3);
    scoreDiv3.appendChild(number3);
    scoreDiv3.appendChild(minusImage3);

    // ? Adding the div to the mainCont div.
    mainCont3.appendChild(scoreDiv3);

    // ? Creating the div for the header of the reply.
    let replyHeadDiv3 = document.createElement("div");
    replyHeadDiv3.className = "reply-head-div";

    // ? The picture of the user
    let userImage3 = document.createElement("img");
    userImage3.src = info.comments[1].replies[0].user.image.png;
    userImage3.className = "user-icon";

    // ? Added the name of the user.
    let userOneName3 = document.createElement("p");
    userOneName3.textContent = info.comments[1].replies[0].user.username;
    userOneName3.className = "user-one-name";

    // ? Added the last activity timing.
    let userOneLastAct3 = document.createElement("span");
    userOneLastAct3.textContent = info.comments[1].replies[0].createdAt;
    userOneLastAct3.className = "user-one-publish";

    // ? Added the div that will hold the reply icon and text.
    let replyCont3 = document.createElement("div");
    replyCont3.className = "reply-cont";

    // ? Added the reply icon.
    let replyIcon3 = document.createElement("img");
    replyIcon3.src = "../images/icon-reply.svg";

    // ? Adding the reply text
    let replySpan3 = document.createElement("span");
    replySpan3.textContent = "Reply";

    // ? Pushing the elements inside the reply div.
    replyCont3.appendChild(replyIcon3);
    replyCont3.appendChild(replySpan3);

    // ? Pushing elements inside the replyHeadDiv.
    replyHeadDiv3.appendChild(userImage3);
    replyHeadDiv3.appendChild(userOneName3);
    replyHeadDiv3.appendChild(userOneLastAct3);
    replyHeadDiv3.appendChild(replyCont3);

    // ? Adding the div to the mainCont div.
    mainCont3.appendChild(replyHeadDiv3);

    // ? Adding the mainCont to the mainReply div.
    replyTwoReplys.appendChild(mainCont3);

    // ? Creating the comment paragraph element.
    let commentP3 = document.createElement("p");
    commentP3.className = "comment-text";
    commentP3.textContent = info.comments[1].replies[0].content;

    // ? Added the comment paragraph to the replyOneMain.
    replyTwoReplys.appendChild(commentP3);

    // ! Comment two reply one stuff End.

    // ! Comment two reply one stuff START.

    // ? The div container for the score stuff and the head div.
    let mainCont4 = document.createElement("div");
    mainCont4.className = "score-head-cont";

    // ? The div of the score stuff.
    let scoreDiv4 = document.createElement("div");
    scoreDiv4.className = "score-div";

    // ? Plus image
    let plusImage4 = document.createElement("img");
    plusImage4.src = "../images/icon-plus.svg";
    plusImage4.className = "plus-image";

    // ? The score number between the plus and minus images.
    let number4 = document.createElement("p");
    number4.textContent = info.comments[1].replies[1].score;
    number4.className = "score-number";

    // ? Minus image
    let minusImage4 = document.createElement("img");
    minusImage4.src = "../images/icon-minus.svg";
    minusImage4.className = "minus-image";

    // ? Adding the elements to the div.
    scoreDiv4.appendChild(plusImage4);
    scoreDiv4.appendChild(number4);
    scoreDiv4.appendChild(minusImage4);

    // ? Adding the div to the mainCont div.
    mainCont4.appendChild(scoreDiv4);

    // ? Creating the div for the header of the reply.
    let replyHeadDiv4 = document.createElement("div");
    replyHeadDiv4.className = "reply-head-div";

    // ? The picture of the user
    let userImage4 = document.createElement("img");
    userImage4.src = info.comments[1].replies[1].user.image.png;
    userImage4.className = "user-icon";

    // ? Added the name of the user.
    let userOneName4 = document.createElement("p");
    userOneName4.textContent = info.comments[1].replies[1].user.username;
    userOneName4.className = "user-one-name";

    // ? Added the last activity timing.
    let userOneLastAct4 = document.createElement("span");
    userOneLastAct4.textContent = info.comments[1].replies[1].createdAt;
    userOneLastAct4.className = "user-one-publish";

    // ? Added the div that will hold the reply icon and text.
    let replyCont4 = document.createElement("div");
    replyCont4.className = "reply-cont";

    // ? Added the reply icon.
    let replyIcon4 = document.createElement("img");
    replyIcon4.src = "../images/icon-reply.svg";

    // ? Adding the reply text
    let replySpan4 = document.createElement("span");
    replySpan4.textContent = "Reply";

    // ? Pushing the elements inside the reply div.
    replyCont4.appendChild(replyIcon4);
    replyCont4.appendChild(replySpan4);

    // ? Pushing elements inside the replyHeadDiv.
    replyHeadDiv4.appendChild(userImage4);
    replyHeadDiv4.appendChild(userOneName4);
    replyHeadDiv4.appendChild(userOneLastAct4);
    replyHeadDiv4.appendChild(replyCont4);

    // ? Adding the div to the mainCont div.
    mainCont4.appendChild(replyHeadDiv4);

    // ? Adding the mainCont to the mainReply div.
    replyTwoReplys.appendChild(mainCont4);

    // ? Creating the comment paragraph element.
    let commentP4 = document.createElement("p");
    commentP4.className = "comment-text";
    commentP4.textContent = info.comments[1].replies[1].content;

    // ? Added the comment paragraph to the replyOneMain.
    replyTwoReplys.appendChild(commentP4);

    // ! Comment two reply one stuff End.
  });
