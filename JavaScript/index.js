// ? Adding the variables that hold the elements need to the fetching the data.

const commentsReply = document.querySelector(".comments-reply");
const commentsTextInput = document.getElementById("comments");
const replyOneMain = document.querySelector(".reply-one .main");
const replyOneReplies = document.querySelector(".reply-one .replies");
const replyTwoMain = document.querySelector(".reply-two .main");
const replyTwoReplies = document.querySelector(".reply-two .replies");
const scoreP1 = document.querySelector(".reply-one .main .score-cont .score");
const scoreP2 = document.querySelector(".reply-two .main .score-cont .score");
const scoreP3 = document.querySelector(
  ".replies .reply-one .score-cont .score"
);
const scoreP4 = document.querySelector(
  ".replies .reply-two .score-cont .score"
);
const userImage1 = document.querySelector(".reply-one .main .user-image");
const userImage2 = document.querySelector(".reply-two .main .user-image");
const userImage3 = document.querySelector(".replies .reply-one .user-image");
const userImage4 = document.querySelector(".replies .reply-two .user-image");
const userName1 = document.querySelector(".reply-one .main .username");
const userName2 = document.querySelector(".reply-two .main .username");
const userName3 = document.querySelector(".replies .reply-one .username");
const userName4 = document.querySelector(".replies .reply-two .username");
const createdAt1 = document.querySelector(".reply-one .main .created-at");
const createdAt2 = document.querySelector(".reply-two .main .created-at");
const createdAt3 = document.querySelector(".replies .reply-one .created-at");
const createdAt4 = document.querySelector(".replies .reply-two .created-at");
const commentP1 = document.querySelector(".reply-one .main .comment-text");
const commentP2 = document.querySelector(".reply-two .main .comment-text");
const replyCommentP1 = document.querySelector(
  ".replies .reply-one .comment-text"
);
const replyCommentSpan1 = document.querySelector(
  ".replies .reply-one .comment-text .replied-to"
);
const replyCommentP2 = document.querySelector(
  ".replies .reply-two .comment-text"
);
const replyCommentSpan2 = document.querySelector(
  ".replies .reply-two .comment-text .replied-to"
);

// ? Fetching the data.

fetch("../data.json")
  .then((data) => data.json())
  .then((info) => {
    scoreP1.textContent = info.comments[0].score;
    scoreP2.textContent = info.comments[1].score;
    scoreP3.textContent = info.comments[1].replies[0].score;
    scoreP4.textContent = info.comments[1].replies[1].score;

    userImage1.src = info.comments[0].user.image.png;
    userImage2.src = info.comments[1].user.image.png;
    userImage3.src = info.comments[1].replies[0].user.image.png;
    userImage4.src = info.comments[1].replies[1].user.image.png;

    userName1.textContent = info.comments[0].user.username;
    userName2.textContent = info.comments[1].user.username;
    userName3.textContent = info.comments[1].replies[0].user.username;
    userName4.textContent = info.comments[1].replies[1].user.username;

    createdAt1.textContent = info.comments[0].createdAt;
    createdAt2.textContent = info.comments[1].createdAt;
    createdAt3.textContent = info.comments[1].replies[0].createdAt;
    createdAt4.textContent = info.comments[1].replies[1].createdAt;

    commentP1.textContent = info.comments[0].content;
    commentP2.textContent = info.comments[1].content;
    replyCommentSpan1.textContent = info.comments[1].replies[0].replyingTo;
    replyCommentP1.textContent += info.comments[1].replies[0].content;
    replyCommentSpan2.textContent = info.comments[1].replies[1].replyingTo;
    replyCommentP2.textContent += info.comments[1].replies[1].content;
  });

const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addToPage(true);
});

function addToPage(isComment) {
  fetch("../data.json")
    .then((data) => data.json())
    .then((info) => {
      const commentSection = document.createElement("section");
      commentSection.className = "reply";
      commentsReply.appendChild(commentSection);

      const mainDiv = document.createElement("div");
      mainDiv.className = "main";
      commentSection.appendChild(mainDiv);

      const scoreCont = document.createElement("div");
      scoreCont.className = "score-cont";
      mainDiv.appendChild(scoreCont);

      const plusImage = document.createElement("img");
      plusImage.src = "../images/icon-plus.svg";
      plusImage.alt = "plus image";
      const minusImage = document.createElement("img");
      minusImage.src = "../images/icon-minus.svg";
      minusImage.alt = "minus image";
      const scoreP = document.createElement("p");
      scoreP.className = "score";
      scoreP.textContent = "0";
      scoreCont.appendChild(plusImage);
      scoreCont.appendChild(scoreP);
      scoreCont.appendChild(minusImage);

      const userImage = document.createElement("img");
      userImage.className = "user-image";
      userImage.src = info.currentUser.image.png;
      userImage.alt = "user image";
      mainDiv.appendChild(userImage);

      const userName = document.createElement("p");
      userName.className = "username";
      userName.innerText = info.currentUser.username;
      mainDiv.appendChild(userName);

      const createdAtP = document.createElement("p");
      createdAtP.className = "created-at";
      createdAtP.textContent = getCurrentDate();
      mainDiv.appendChild(createdAtP);

      const replyIconDiv = document.createElement("div");
      replyIconDiv.className = "reply-icon";
      mainDiv.appendChild(replyIconDiv);

      const replyImage = document.createElement("img");
      replyImage.src = "../images/icon-reply.svg";
      replyImage.alt = "reply icon";
      const replyTextSpan = document.createElement("span");
      replyTextSpan.className = "reply-text";
      replyTextSpan.textContent = "Reply";
      replyIconDiv.appendChild(replyImage);
      replyIconDiv.appendChild(replyTextSpan);

      const commentText = document.createElement("p");
      commentText.className = "comment-text";
      mainDiv.appendChild(commentText);

      if (isComment) {
        commentText.innerText = commentsTextInput.value;
      } else {
        const repliedTo = document.createElement("span");
        repliedTo.className = "replied-to";
        repliedTo.textContent = getUserName(repliedTo);
        commentText.innerText = commentsTextInput.value;
      }
      commentsTextInput.value = "";
    });
}

function getCurrentDate() {
  let currentDate = new Date();
  let days = String(currentDate.getDate()).padStart(2, "0");
  let months = String(currentDate.getMonth() + 1).padStart(2, "0"); // January is 0;
  let years = String(currentDate.getFullYear());
  return `${days}/${months}/${years}`;
}
