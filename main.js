import "./style.css";
import { setComment } from "./comment.js";

document.querySelector("#app").innerHTML = `
  <div id="comments">
    <h2>댓글</h2>
    <form id="comment-form">
      <input type="text" id="name-input" placeholder="이름">
      <textarea id="comment-input" placeholder="댓글 내용"></textarea>
      <button type="submit">댓글 추가</button>
    </form>
    <ul id="comment-list"></ul>
  </div>
`;

setComment(document.querySelector("#comment-list"));
