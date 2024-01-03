(function() {
  "use strict";
document.getElementById('backButton').addEventListener('click', function() {
  // 处理返回按钮点击的逻辑，例如返回上一页或显示上一个页面
});

document.getElementById('postCommentButton').addEventListener('click', function() {
  // 处理发布评论的逻辑
  var commentInput = document.getElementById('commentInput').value;
  if (commentInput.trim() !== "") {
    addComment(commentInput);
    document.getElementById('commentInput').value = "";
  }
});

document.getElementById('commentList').addEventListener('click', function(e) {
  // 处理点击评论以在模态框中显示详细信息的逻辑
  if (e.target && e.target.matches("li.comment")) {
    var commentText = e.target.textContent;
    showCommentDetailsModal(commentText);
  }
});

document.querySelector('.modal .close').addEventListener('click', function() {
  // 处理模态框关闭按钮点击的逻辑
  document.querySelector('.modal').style.display = 'none';
});

function addComment(comment) {
  // 添加评论到评论列表的逻辑
  var commentList = document.getElementById('commentList');
  var li = document.createElement('li');
  li.classList.add('comment');
  li.textContent = comment;
  commentList.appendChild(li);
}

function showCommentDetailsModal(commentText) {
  // 在模态框中显示评论详细信息的逻辑
  var modalComment = document.getElementById('modalComment');
  modalComment.textContent = commentText;
  document.querySelector('.modal').style.display = 'block';
}
})();