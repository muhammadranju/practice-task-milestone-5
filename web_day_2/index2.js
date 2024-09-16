// Add an event listener to the button with the id "btn-post" for a click event
document.getElementById("btn-post").addEventListener("click", function () {
  // Get the comment input element
  const comment = document.getElementById("comment-box");
  // Get the comment container element
  const commentContainer = document.getElementById("comment-container");
  // Get the value (text) from the comment input
  const newComment = comment.value;

  // Create a new paragraph element
  const p = document.createElement("p");
  // Set the text content of the paragraph to the new comment
  p.innerText = newComment;
  // Add the new paragraph to the comment container
  commentContainer.appendChild(p);
  // Clear the comment input field
  comment.value = "";
});
