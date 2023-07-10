export function setComment(commentList) {
  document.getElementById("comment-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name-input");
    const commentInput = document.getElementById("comment-input");

    const name = nameInput.value;
    const comment = commentInput.value;

    if (name && comment) {
      const commentItem = document.createElement("li");
      commentItem.classList.add("comment-item");

      const commentHeader = document.createElement("h3");
      commentHeader.textContent = name;

      const commentContent = document.createElement("p");
      commentContent.textContent = comment;

      const replyForm = document.createElement("form");
      replyForm.classList.add("reply-form");
      replyForm.innerHTML = `
        <input type="text" class="name-input" placeholder="이름">
        <textarea class="comment-input" placeholder="댓글 내용"></textarea>
        <button type="submit">답글 추가</button>
      `;

      const replyList = document.createElement("ul");
      replyList.classList.add("reply-list");

      replyForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const replyNameInput = replyForm.querySelector(".name-input");
        const replyCommentInput = replyForm.querySelector(".comment-input");

        const replyName = replyNameInput.value;
        const replyComment = replyCommentInput.value;

        if (replyName && replyComment) {
          const replyItem = document.createElement("li");
          replyItem.classList.add("reply-item");

          const replyContent = document.createElement("p");
          replyContent.textContent = replyComment;

          const replyHeader = document.createElement("strong");
          replyHeader.textContent = replyName;

          replyContent.prepend(replyHeader);
          replyItem.appendChild(replyContent);
          replyList.appendChild(replyItem);

          replyNameInput.value = "";
          replyCommentInput.value = "";
        }
      });

      commentItem.appendChild(commentHeader);
      commentItem.appendChild(commentContent);
      commentItem.appendChild(replyForm);
      commentItem.appendChild(replyList);

      commentList.appendChild(commentItem);

      nameInput.value = "";
      commentInput.value = "";
    }
  });
}
