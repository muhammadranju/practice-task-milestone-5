document.getElementById("btn-post").addEventListener("click", function () {
  // Retrieve the comment textarea element
  const commentBox = document.getElementById("comment-box");

  // Trim any leading or trailing whitespace from the comment
  const newComment = commentBox.value.trim();

  // Check if the comment is empty
  if (newComment === "") {
    // Display an alert message to the user
    alert("Please enter a comment before posting.");
    // Exit the function
    return;
  }

  // Retrieve the comment container element
  const commentContainer = document.getElementById("comment-container");

  // Create a new paragraph element
  const p = document.createElement("p");

  // Set the text content of the paragraph to the new comment
  p.textContent = newComment;

  // Append the new paragraph to the comment container
  commentContainer.appendChild(p);

  // Clear the comment textarea
  commentBox.value = "";
});
