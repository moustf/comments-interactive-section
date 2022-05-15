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

// ? Targeting the send button element.
const sendBtn = document.getElementById("send-btn");

// ? Added and click event listener to the send button.
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addToPage(true, commentsTextInput.value);
});

// ? Creating the array which will contains the comments text.
let commentsText = [];

let dataIdVar = 5; // ? Reply id counter variable.

let currentUserImage, CurrentUserName;

// ? Creating the function which is responsible for add the new comment to the dom tree and render it in
// ? the page.
function addToPage(isComment, text) {
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
      scoreCont.setAttribute("data-id", dataIdVar);
      dataIdVar++;
      mainDiv.appendChild(scoreCont);

      const plusImage = document.createElement("img");
      plusImage.src = "../images/icon-plus.svg";
      plusImage.classList.add("plus-image");
      plusImage.alt = "plus image";
      const minusImage = document.createElement("img");
      minusImage.src = "../images/icon-minus.svg";
      minusImage.classList.add("minus-image");
      minusImage.alt = "minus image";
      const scoreP = document.createElement("p");
      scoreP.className = "score";
      scoreP.textContent = "0";
      scoreCont.appendChild(plusImage);
      scoreCont.appendChild(scoreP);
      scoreCont.appendChild(minusImage);

      currentUserImage = info.currentUser.image.png;

      const userImage = document.createElement("img");
      userImage.className = "user-image";
      userImage.src = currentUserImage;
      userImage.alt = "user image";
      mainDiv.appendChild(userImage);

      CurrentUserName = info.currentUser.username;

      const userName = document.createElement("p");
      userName.className = "username";
      userName.innerText = CurrentUserName;
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

      // ? Adding the comment text to the comments text array.
      commentsText.push(text);
      if (isComment) {
        // ? If the new comment is a primary comment, just add the text to the p element.
        commentText.innerText = text;
      } else {
        // ? if the new comment is a reply, then add a span for the replied to username and call the
        // ? getUserName function.
        const repliedTo = document.createElement("span");
        repliedTo.className = "replied-to";
        repliedTo.textContent = getUserName(repliedTo);
        commentText.appendChild(repliedTo);
        commentText.innerText += commentsTextInput.value;
      }
      commentsTextInput.value = "";
      addToLocalStorage(commentsText);
      createReplyInputDiv();
    });
}

// ? Creating the function which is responsible for creating the replyInputDiv.
function createReplyInputDiv() {
  const repliesDiv = document.createElement("div");
  repliesDiv.className = "replies";
  commentSection.appendChild(repliesDiv);

  const replyInputDiv = document.createElement("div");
  replyInputDiv.className = "replies-input-div";
  repliesDiv.appendChild(replyInputDiv);

  const replyInputImg = document.createElement("img");
  replyInputImg.src = "";
  replyInputImg.alt = "current-user-image";
  replyInputDiv.appendChild(replyInputImg);

  const replyInputInput = document.createElement("input");
  replyInputInput.type = "text";
  replyInputInput.name = "current-user-image";
  replyInputInput.placeholder = "add your reply ...";
  replyInputDiv.appendChild(replyInputInput);

  const replyInputBtn = document.createElement("button");
  replyInputBtn.type = "button";
  replyInputBtn.textContent = "Reply";
  replyInputDiv.appendChild(replyInputBtn);
}

// ? Creating the function which is responsible for getting the current date.
function getCurrentDate() {
  let currentDate = new Date();
  let days = String(currentDate.getDate()).padStart(2, "0");
  let months = String(currentDate.getMonth() + 1).padStart(2, "0"); // January is 0;
  let years = String(currentDate.getFullYear());
  return `${days}/${months}/${years}`;
}

// ? Creating the function which is responsible for getting the username of the person whom the current user
// ? replied to.
function getUserName(ele) {
  const parentSibling = ele.parentElement.parentElement.previousSibling;
  let userName = parentSibling.querySelector(".username").textContent;
  return userName;
}

// ? Creating the function which is responsible for adding the comment to the local storage.
function addToLocalStorage(commentText) {
  window.localStorage.setItem("commentsArr", JSON.stringify(commentText));
}

// ? Creating the function which is responsible for getting items from local storage and render it in the page.
function fromLSToPage() {
  if (localStorage.getItem("commentsArr")) {
    let commentsArr = JSON.parse(localStorage.getItem("commentsArr"));
    commentsArr.forEach((text) => {
      addToPage(true, text);
    });
  }
}
// ? Calling the function which takes the data from local storage and render it in th page.
fromLSToPage();

// ? Add an event listener to the commentsReply div to listen to the reply div clicks.
commentsReply.addEventListener("click", (e) => {
  makeFlex(e);
  addFlexToLocalStorage(true);
});

// ? Create the function which is responsible for making the reply input div visible.
function makeFlex(e) {
  if (
    e.target.className === "reply-icon" ||
    e.target.alt === "reply icon" ||
    e.target.className === "reply-text"
  ) {
    e.target
      .closest(".main")
      .nextElementSibling.querySelector("div").style.display = "flex";
    addUserImageToReplyDiv();
  }
}

// ? Create the function which is responsible for adding the flex boolean value to the local storage to use it later.
function addFlexToLocalStorage(isFlex) {
  isFlex
    ? window.localStorage.setItem("flex", true)
    : window.localStorage.setItem("flex", false);
}

// ? Targeting the reply buttons.
let replyButtons = document.querySelectorAll(".replies-input-div button");

// ? Reply text value array.
let replyTextValue = [];

// ? looping over the reply button and listen to the click to do the functionality.
for (let i = 0; i < replyButtons.length; i++) {
  replyButtons[i].onclick = function (e) {
    let textValue = replyButtons[i].previousElementSibling.value;
    const replies = e.target.closest(".replies");
    if (replyButtons[i].previousElementSibling.value.trim() !== "") {
      e.target.parentElement.style.display = "none";
      replyButtons[i].previousElementSibling.value = "";

      const commentOuterDiv = document.createElement("div");
      commentOuterDiv.className = "reply";
      commentOuterDiv.setAttribute("data-reply", dataIdVar);
      dataIdVar++;
      replies.appendChild(commentOuterDiv);

      const scoreCont = document.createElement("div");
      scoreCont.className = "score-cont";
      scoreCont.setAttribute("data-id", dataIdVar);
      dataIdVar++;
      commentOuterDiv.appendChild(scoreCont);

      const plusImage = document.createElement("img");
      plusImage.src = "../images/icon-plus.svg";
      plusImage.classList.add("plus-image");
      plusImage.alt = "plus icon";
      const minusImage = document.createElement("img");
      minusImage.src = "../images/icon-minus.svg";
      minusImage.classList.add("minus-image");
      minusImage.alt = "minus icon";
      const scoreP = document.createElement("p");
      scoreP.className = "score";
      scoreP.textContent = "0";
      scoreCont.appendChild(plusImage);
      scoreCont.appendChild(scoreP);
      scoreCont.appendChild(minusImage);

      const userImage = document.createElement("img");
      userImage.className = "user-image";
      userImage.src = currentUserImage;
      userImage.alt = "user image";
      commentOuterDiv.appendChild(userImage);

      const userName = document.createElement("p");
      userName.className = "username";
      userName.innerText = CurrentUserName;
      commentOuterDiv.appendChild(userName);

      const createdAtP = document.createElement("p");
      createdAtP.className = "created-at";
      createdAtP.textContent = getCurrentDate();
      commentOuterDiv.appendChild(createdAtP);

      const editIconDiv = document.createElement("div");
      editIconDiv.className = "edit-icon";
      commentOuterDiv.appendChild(editIconDiv);

      const editImg = document.createElement("img");
      editImg.src = "../images/icon-edit.svg";
      editImg.alt = "edit icon";
      editIconDiv.appendChild(editImg);

      const editTextSpan = document.createElement("span");
      editTextSpan.className = "edit-text";
      editTextSpan.textContent = "Edit";
      editIconDiv.appendChild(editTextSpan);

      const commentText = document.createElement("p");
      commentText.className = "comment-text";
      commentOuterDiv.appendChild(commentText);

      const repliedTo = document.createElement("span");
      commentText.appendChild(repliedTo);
      const parentSibling =
        repliedTo.parentElement.parentElement.previousElementSibling
          .parentElement.previousElementSibling;
      let userName2 = parentSibling.querySelector(".username").textContent;
      repliedTo.className = "replied-to";
      repliedTo.textContent = "@" + userName2;
      const textSpan = document.createElement("span");
      textSpan.className = "reply-text";
      textSpan.textContent = textValue;
      commentText.appendChild(textSpan);
      textValue = "";

      const updateBtn = document.createElement("button");
      updateBtn.className = "update-btn";
      updateBtn.type = "button";
      updateBtn.textContent = "Update";
      commentOuterDiv.appendChild(updateBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.type = "button";
      commentOuterDiv.appendChild(deleteBtn);

      const deleteImg = document.createElement("img");
      deleteImg.className = "delete-img";
      deleteImg.src = "../images/icon-delete.svg";
      deleteImg.alt = "delete button";
      deleteBtn.appendChild(deleteImg);

      const deleteText = document.createElement("span");
      deleteText.className = "delete-text";
      deleteText.textContent = "Delete";
      deleteBtn.appendChild(deleteText);
    }
  };
}

// ? Targeting the plus images.
const plusImages = document.querySelectorAll(".plus-image");

// ? Targeting the minus image.
const minusImages = document.querySelectorAll(".minus-image");

// ? Added the event listener to the commentsReply div to listen to plus and minus images clicks
commentsReply.addEventListener("click", (e) => {
  if (e.target.className == "plus-image") {
    let newScore = Number(e.target.nextElementSibling.textContent) + 1;
    e.target.nextElementSibling.textContent = newScore;
    addScoreToLS("data-id", e.target.parentElement.dataset.id, newScore);
  } else if (e.target.className == "minus-image") {
    let newScore = Number(e.target.previousElementSibling.textContent) - 1;
    e.target.previousElementSibling.textContent = newScore;
    addScoreToLS("data-id", e.target.parentElement.dataset.id, newScore);
  }
});

// ? Creating the array of objects for the plus and minus images.
let plusMinusArray = [];

// ? Adding the score to local storage.
function addScoreToLS(dataType, dataId, score) {
  let isNotThere = false;
  if (plusMinusArray.length === 0) {
    plusMinusArray.push({ [dataType]: dataId, scoreNum: score });
    window.localStorage.setItem("score", JSON.stringify(plusMinusArray));
  } else {
    for (let i = 0; i < plusMinusArray.length; i++) {
      if (plusMinusArray[i][dataType] == dataId) {
        plusMinusArray[i].scoreNum = score;
        window.localStorage.setItem("score", JSON.stringify(plusMinusArray));
        isNotThere = true;
      }
    }
    if (isNotThere === false) {
      plusMinusArray.push({ [dataType]: dataId, scoreNum: score });
      window.localStorage.setItem("score", JSON.stringify(plusMinusArray));
    }
  }
}

// ? Checking fi there is anything in the local storage and add it to the page.
// ? Putting the condition in a set time out to be executed after the fetch is done!
setTimeout(() => {
  if (localStorage.getItem("score")) {
    let arr = JSON.parse(localStorage.getItem("score"));
    arr.forEach((obj, i) => {
      document.querySelector(
        `[data-id='${obj["data-id"]}']`
      ).children[1].textContent = obj.scoreNum;
    });
  }
}, 800);

let textArr = [];

// ? Added the event listener to the commentsReply div to listen to the edit div clicks and do the functionality.
commentsReply.addEventListener("click", (e) => {
  if (
    e.target.className === "edit-icon" ||
    e.target.alt === "edit icon" ||
    e.target.className === "edit-text"
  ) {
    // ? When the event occurs, an element is added to the dom tree, so we need to check the order of the elements
    if (
      e.target.closest(".edit-icon").nextElementSibling.nextElementSibling
        .localName == "button"
    ) {
      e.target.closest(
        ".edit-icon"
      ).nextElementSibling.nextElementSibling.style.display = "block";
      e.target
        .closest(".edit-icon")
        .nextElementSibling.setAttribute("contentEditable", "true");
      e.target.closest(".edit-icon").nextElementSibling.focus();
    } else {
      e.target.closest(
        ".edit-icon"
      ).nextElementSibling.nextElementSibling.nextElementSibling.style.display =
        "block";
      e.target
        .closest(".edit-icon")
        .nextElementSibling.nextElementSibling.setAttribute(
          "contentEditable",
          "true"
        );
      e.target
        .closest(".edit-icon")
        .nextElementSibling.nextElementSibling.focus();
    }
  }
});

// ? Added the event listener to the commentsReply div to listen to the update button clicks and do the functionality.
commentsReply.addEventListener("click", (e) => {
  if (e.target.className == "update-btn") {
    e.target.previousElementSibling.setAttribute("contentEditable", "false");
    e.target.previousElementSibling.blur();
    e.target.style.display = "none";

    let text = e.target.previousElementSibling.textContent;
    let id = e.target.closest(".reply").dataset.reply;
    setReplyToLS(text, id);
  }
});

// ? creating the function which is responsible for adding the text to the local storage.
function setReplyToLS(text, id) {
  let isNotThere = false;
  if (textArr.length === 0) {
    textArr.push({ "data-reply": id, text: text });
    window.localStorage.setItem("text", JSON.stringify(textArr));
  } else {
    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i]["data-reply"] == id) {
        textArr[i].text = text;
        window.localStorage.setItem("text", JSON.stringify(textArr));
        isNotThere = true;
      }
    }
    if (isNotThere === false) {
      textArr.push({ "data-reply": id, text: text });
      window.localStorage.setItem("text", JSON.stringify(textArr));
    }
  }
}

// ? creating the function which is responsible for taking the replies data from the local storage.
function addToPageFormLS() {
  let textArr = JSON.parse(localStorage.getItem("text"));
  textArr.forEach((obj) => {
    document
      .querySelector(`[data-reply="${obj["data-reply"]}"]`)
      .querySelector(".comment-text").textContent = obj.text;
  });
}

// ? Set a time out to make the check happens after the fetch finishs.
setTimeout(() => {
  if (localStorage.getItem("text")) {
    addToPageFormLS();
  }
}, 500);

// ? Creating the array in which we will add the data-ids to add them to the local storage.
let deletedArr = [];

// ? Targeting the delete buttons to hear the click event to each one of them.
const deleteButtons = document.querySelectorAll(".delete-btn");

let divId; // ? The variable to add the data-reply of the div which just clicked to be deleted.

// ? Loop over the delete button to add event listener to each one of them to listen to delete button clicks.
deleteButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    divId = btn.closest(".reply").dataset.reply;
    document.querySelector(".delete-msg-cont").style.display = "flex";
  })
);

// ? Targeting the cancel and approve buttons inside the delete button container.
const cancelButtons = document.querySelectorAll(".cancel");
const approveButtons = document.querySelectorAll(".approve");

// ? Loop over the cancel buttons to cancel the delete process when they are clicked.
cancelButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    document.querySelector(".delete-msg-cont").style.display = "none";
  })
);

// ? Loop over the cancel buttons to approve the delete process when they are clicked.
approveButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    approveDelete(divId);
    addDeletedToLS(deletedArr);
  })
);

// ? Creating the function which is responsible for approving the delete process and delete the element.
function approveDelete(divId) {
  document.querySelector(`[data-reply="${divId}"]`).remove();
  document.querySelector(".delete-msg-cont").style.display = "none";
  deletedArr.push(+divId);
}

// ? Creating the function which is responsible for adding the deleted array to the local storage.
function addDeletedToLS(deletedArr) {
  localStorage.setItem("deleted", JSON.stringify(deletedArr));
}

// ? Checks if there is deleted key on the local storage, call the function approveDelete() to each one of the data.
if (localStorage.getItem("deleted")) {
  let deletedArr = JSON.parse(localStorage.getItem("deleted"));
  deletedArr.forEach((id) => approveDelete(id));
}

// ? Fetch the data to set the current user's picture in the reply input div's img.

function addUserImageToReplyDiv() {
  const replyInputImage = document.querySelectorAll(".replies-input-div img");
  // console.log(replyInputImage);
  for (let i = 0; i < replyInputImage.length; i++) {
    fetch("../data.json")
      .then((data) => data.json())
      .then((info) => {
        replyInputImage[i].src = info.currentUser.image.png;
      });
  }
}
