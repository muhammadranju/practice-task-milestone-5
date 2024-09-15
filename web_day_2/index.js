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

const li = document.createElement("li");
li.innerText = "This is Salbon, Katabon";
div.appendChild(li);

console.log(li);

// console.log(div);\

btn.addEventListener("click", function () {
  btn.innerText = "Remove Css";
  btn.classList.add("btn");
  for (se of section) {
    se.style.border = "2px solid red";
    se.style.margin = "20px";
    se.style.padding = "20px";
    se.style.borderRadius = "20px";
    se.style.backgroundColor = "lightgrey";
  }
});
